'use client';

import TicketCard from "./TicketCard";

export default function TicketList({tickets, onAdd}) {
    
    return (
        <section>
            <h2>Ticket List</h2>
            <div>
                {tickets.map(ticket => (
                    <TicketCard key={ticket.id} ticket={ticket} onAdd={onAdd} />
                ))}
            </div>
        </section>
    )
}