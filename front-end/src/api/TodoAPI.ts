import axios, {AxiosResponse} from 'axios';
import { API } from './APICore';

export default function fetchTodo(): Promise<any> {
    API.get('/api/todos');
}