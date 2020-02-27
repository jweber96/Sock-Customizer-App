# ** Sock-Customizer README **

1. Clone the repo either by downloading a zip from https://github.com/my1124/Sock-Customizer.git 
or by typing the following into your termainl - git clone https://github.com/my1124/Sock-Customizer.git

2. Create a virtual evironment. For reference on how to do this, refer to https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/.

3. Install the packages in the requirements.txt by typing the following into your terminal - 
pip install -r requirements.txt

4. To run the backend, cd into the customizer directory and first create yourself as a superuser by typing the following into your terminal - python manage.py createsuperuser

5. Start the local server by typing the following into the terminal - python manage.py runserver

6. Open http://127.0.0.1:8000/admin and login.

7. To run the React web app, cd into the frontend directory and type the following into your terminal - 
yarn start

7a. If you dont have yarn installed on your machine, you can install Yarn (https://brew.sh/) through the Homebrew package manager by typing the following into the terminal - brew install yarn

7b. Open http://localhost:3000/ and you are good to go!
