const securedTables = document.getElementById('tables');

fetch('/api/tables')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        let base = 0;
        let extra = 0;

        data.forEach(element => {
            base++;
            if (base <= 5) {
                let tableNumber = base;
                var tableText = `Table #${tableNumber}`;
            } else {
                extra++;
                let tableNumber = extra;
                var tableText = `Waiting #${tableNumber}`;
            }

            let columnEl = document.createElement('div').setAttribute('class', 's12 card');
            let contentEl = document.createElement('div').setAttribute('class', 'card-content');
            let titleEl = document.createElement('span').setAttribute('class', 'card-title');
            let nameEl = document.createElement('p');
            let idEl = document.createElement('p');
            let phoneEl = document.createElement('p');
            let emailEl = document.createElement('p');

            titleEl.textContent = tableText;
            nameEl.textContent = `Name: ${element.name}`;
            idEl.textContent = `ID: ${element.id}`;
            phoneEl.textContent = `Phone: ${element.phone}`;
            emailEl.textContent = `Email: ${element.email}`;

            contentEl.appendChild(titleEl, nameEl, idEl, phoneEl, emailEl);
            columnEl.appendChild(contentEl);

            securedTables.appendChild(columnEl);
        });
    })