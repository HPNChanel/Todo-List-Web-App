import React, { createContext, useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/taskAPI';

export const TaskContext = createContext();

export const TaskProvider = ()