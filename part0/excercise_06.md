sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server

   
    Note right of browser: when the user submit the forms the form on submit event is triggered which prevent the default behaviour. it create a note object, append it to the dom node representing the list of notes which displays it and send the new note to the server

   