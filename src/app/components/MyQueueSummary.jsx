'use client'

export default function MyQueueSummary({tickets, onRemove, onClear}) {
    
    return ( 
        <div>
                <br></br>
            <h2>My Queue</h2>
                        <div>
                            <button onClick={() => onRemove(tickets.id)}> Remove</button>
                        </div>
            
        <div>
            <button onClick= {onClear} disabled = {tickets.length === 0}> Clear Queue</button>
        </div>
    </div>
    );
}