// Your Code Here
async function main() {
    let listBooks = await fetch('http://localhost:3001/listBooks')
    let listBooksJSON = await listBooks.json()

    listBooksJSON.forEach(updateBook);
}


function updateBook(book) {
    let root = document.querySelector('#root')

    let div = document.createElement('div')
    div.textContent = book.title

    let input = document.createElement('input')
    input.value = book.quantity

    let submitButton = document.createElement('button')
    submitButton.textContent = 'Save'

    submitButton.addEventListener('click', function () {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                id: book.id,
                quantity: input.value
            })
        })
    })

    div.append(input, submitButton)

    root.append(div)
}


main()