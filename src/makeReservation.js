// Import table constructor
const Table = require ('../lib/Table');

// Get add butto.value.trim()n
const addBtn = document.getElementById('addBtn');

// Make() empty arrays for tables seated and waitlist reservations
const securedTables = [];
const waitingTables = [];

// Event listener for button
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let tableName = document.getElementById('name').value.trim();
    let tableId = document.getElementById('id').value.trim();
    let tableEmail = document.getElementById('email').value.trim();
    let tablePhone = document.getElementById('phone').value.trim();

    let newReservation = new Table(tableName, tableId, tableEmail, tablePhone);

    if ((securedTables.length + 1) < 5) {
        newReservation.table = `Table #${securedTables.length + 1}`;
        securedTables.push(newReservation);
    } else {
        newReservation.table = `Table #${waitingTables.length + 1}`;
        waitingTables.push(newReservation);
    }

    fetch('/api/tables', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReservation)
    }).then(
        (response) => response.json()
    ).then((data) => {
        console.log(data);
        if (securedTables < 5) {
            alert(`Making reservation for ${data.name}`)
        } else {
            alert(`Sorry, ${data.name}, there are no tables available. You have been added to the waitlist.`)
        }
    }).catch((err) => {
        if (err) throw err;
    })
})