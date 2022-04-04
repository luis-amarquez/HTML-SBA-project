# Technologies used
For my SBA I used Vue as my frontend framework and will therefor be a single page application.

I have implemented a mock login page that will only accept `user` as the username and `pass` as password. If both fields 
are entered correctly, vue will redirect you to the home page. LocalStorage was used to be able to maintain changes 
done such as adding and deleting customers even after refreshing the page and or closing the window.

# Description
My website is based on a customer management system. You are able to add customers and add notes to their accounts. 
More features can be added such as orders or anything else. This project is just a skeleton for any and all types of 
systems that have customers.

Once you are logged in, you are able to see 3 default customers and are able to edit them, delete them and create new. 
Once a backend is implemented, the vue store will no longer be required and instead of using localstorage, one will use 
a db.