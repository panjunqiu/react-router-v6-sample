import { Outlet } from 'react-router-dom';

export default function Expenses() {
  return (
    <main>
      <h2>Expenses</h2>
      <Outlet />
    </main>
  );
}
