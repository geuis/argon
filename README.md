# argon
Store and retrieve actual values from local and session storage in the browser.

When you use localStorage or sessionStorage, values are converted to strings when they're stored. Retrieving information requires parsing the strings from storage to the correct data type. 

Argon adds type hints for each native javascript data type when you store a piece of data. The type hint is used during retrieval to automatically return your data in its native form. This even works for functions.

