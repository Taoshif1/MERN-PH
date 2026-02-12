import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [selectedId, setSelectedId] = useState(null); // To track which task to show
  const queryClient = useQueryClient();

  // 1. Fetch All Tasks
  const { data: tasks, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => API.get('/tasks').then(res => res.data)
  });

  // 2. Fetch Single Task (Only runs if selectedId is not null)
  const { data: singleTask, isFetching: isFetchingSingle } = useQuery({
    queryKey: ['tasks', selectedId], // Unique key per ID
    queryFn: () => API.get(`/tasks/${selectedId}`).then(res => res.data),
    enabled: !!selectedId, // Only run this query if selectedId exists
  });

  // 3. Mutation: Add Task
  const addMutation = useMutation({
    mutationFn: (title) => API.post('/tasks', { title }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] })
  });

  // 4. Mutation: Toggle Complete
  const toggleMutation = useMutation({
    mutationFn: (id) => API.patch(`/tasks/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      // Also update the single view if it's the same task!
      queryClient.invalidateQueries({ queryKey: ['tasks', selectedId] });
    }
  });

  if (isLoading) return <div><h2>🌀 Loading tasks...</h2></div>;

  return (
    <div style={{ display: 'flex', gap: '50px', padding: '40px' }}>
      {/* LEFT SIDE: List & Add */}
      <div>
        <h2>All Tasks</h2>
        <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
        <button onClick={() => { addMutation.mutate(taskTitle); setTaskTitle(''); }}>Add</button>
        
        <ul>
          {tasks?.map(task => (
            <li key={task._id} style={{ marginBottom: '10px' }}>
              <span 
                onClick={() => setSelectedId(task._id)} 
                style={{ cursor: 'pointer', fontWeight: selectedId === task._id ? 'bold' : 'normal' }}
              >
                {task.title} {task.completed ? '✅' : '⏳'}
              </span>
              <button onClick={() => toggleMutation.mutate(task._id)} style={{ marginLeft: '10px' }}>
                Toggle
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE: Individual View */}
      <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '20px' }}>
        <h2>Task Detail View</h2>
        {isFetchingSingle ? <p>🌀 Loading tasks...</p> : null}
        {singleTask ? (
          <div style={{ background: '#f4f4f4', padding: '15px' }}>
            <p><strong>ID:</strong> {singleTask._id}</p>
            <p><strong>Title:</strong> {singleTask.title}</p>
            <p><strong>Status:</strong> {singleTask.completed ? 'Done' : 'Pending'}</p>
            <button onClick={() => setSelectedId(null)}>Close Detail</button>
          </div>
        ) : <p>Select a task to see details</p>}
      </div>
    </div>
  );
}

export default App;