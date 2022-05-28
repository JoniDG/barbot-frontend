# ToDo 
- Agregar `onClick` en MixedDrink => Hace API call al backend
- Agregar API calls al backend para traer la info de `availableDrinks` (`/drinks`) y `mixedDrinks` (`/mixedDrinks`)

- Agregar Login con reducer:
    - Si no hay un JWT guardada:
        - Mostrar la pagina de login
        - Hacer API call al auth del backend (`POST /auth {"user":<user>, "password":<password>}`)
        - El backend devuelve un JWT (ej: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`)
        - El JWT se guarda en una cookie?
    - Si hay un JWT guardado:
        - Se valida el JWT
        - Se le muestra la pagina