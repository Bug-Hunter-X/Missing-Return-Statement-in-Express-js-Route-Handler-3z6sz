# Missing Return Statement in Express.js Route Handler

This repository demonstrates a common yet subtle error in Express.js route handlers: missing `return` statements within conditional logic.  This can lead to unexpected behavior and potentially vulnerabilities.

## Bug Description

The `bug.js` file contains an Express.js route that fetches user data. If a user is not found, a 404 status code is sent. However, if the user is not found, the code continues to execute `res.send(user)`, which will send an undefined response and may cause unexpected behavior in the client.

## Solution

The `bugSolution.js` file provides the corrected code.  By adding a `return` statement before `res.status(404).send('User not found')`, we ensure that no further code in the handler is executed if the user is not found.