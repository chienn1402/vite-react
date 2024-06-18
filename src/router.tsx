import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from '@/pages/Root';
import ExampleLayout from '@/layouts/Example';
import Example1 from '@/pages/Example1';
import Example2 from '@/pages/Example2';
import Example3 from '@/pages/Example3';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route element={<ExampleLayout />}>
        <Route path="/" element={<Navigate to={'/example-1'} replace />} />
        <Route path="/example-1" element={<Example1 />} />
        <Route path="/example-2" element={<Example2 />} />
        <Route path="/example-3" element={<Example3 />} />
      </Route>
    </Route>,
  ),
);
