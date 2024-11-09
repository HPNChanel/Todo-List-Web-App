import { useState, useEffect, useCallback } from 'react';
import { getTasks } from '../api/TaskApi';

const useTasks = (isLoggedIn, navigate) => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    const fetchTasks = useCallback(async () => {
        if (!isLoggedIn) return; // Chỉ gọi API nếu đã đăng nhập

        try {
            const fetchedTasks = await getTasks(navigate);
            setTasks(fetchedTasks);
        } catch (err) {
            setError(err);
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return { tasks, error, fetchTasks };
};

export default useTasks;
