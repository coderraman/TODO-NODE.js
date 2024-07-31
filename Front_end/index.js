async function postdata() {
  const user_input = document.getElementById("user_input").value;
  document.getElementById("user_input").value = "";

  await fetch("http://localhost:8001/api/posttodo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_data: user_input }),
  });

  // Refresh the table data after posting new data
  getdata();
}

async function getdata() {
  const res = await fetch("http://localhost:8001/api/gettodos");
  const data = await res.json();

  const tableBody = document.querySelector("#data-table tbody");
  tableBody.innerHTML = ""; // Clear previous data

  data.forEach((value, index) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = index + 1; // Assuming you want a simple index as ID
    row.appendChild(idCell);

    const titleCell = document.createElement("td");
    titleCell.textContent = value.user_data;
    row.appendChild(titleCell);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = async () => {
      await fetch(`http://localhost:8001/api/deletetodo/${value._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Refresh the table data after deletion
      getdata();
    };
    row.appendChild(deleteButton);

    const updateButton = document.createElement("button");
    updateButton.innerText = "Update";
    updateButton.onclick = async () => {
      const user_input = prompt("Enter the data here", value.user_data);

      if (user_input !== null) {
        await fetch(`http://localhost:8001/api/updatetodo/${value._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_data: user_input }),
        });

        // Refresh the table data after update
        getdata();
      }
    };
    row.appendChild(updateButton);

    tableBody.appendChild(row);
  });
}

// Call getdata initially to load data on page load
getdata();
