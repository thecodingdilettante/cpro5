"use client";

export default function TicketCard({ ticket, inQueue, onAdd }) {
  const { title, priority, status, assignee, updatedAt } = ticket;
    const updated = new Date(updatedAt).toLocaleDateString();

    return (
    <div>
      <h3>{title}</h3>
      <div>Priority: {priority}</div>
      <div>Status: {status}</div>
      <div>Assignee: {assignee}</div>
      <div>Updated: {updated}</div>

      <button onClick={onAdd} disabled={inQueue}>
        {inQueue ? 'Already in Queue' : 'Add to Queue'}
      </button>
    </div>
  );
}