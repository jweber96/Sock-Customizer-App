**Sock Customizer**

These steps will help get your environment up and running, so you can check out our awesome sock customizer!

Feel free to check out our app on Heroku as well - https://the-sock-customizer.herokuapp.com/.

1. Clone the repo either by downloading a zip from https://github.com/my1124/Sock-Customizer.git 
or by typing the following into your terminal - git clone https://github.com/my1124/Sock-Customizer.git

2. Create a virtual environment. For reference on how to do this, refer to https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/. Ensure that you activate your virtual environment by typing the following into your terminal - 
source name_of_your_environment/bin/activate

3. Install the packages in the requirements.txt by typing the following into your terminal - 
pip install -r requirements.txt

4. To run the backend, cd into the customizer directory and first create yourself as a superuser by typing the following into your terminal - python manage.py createsuperuser

5. Start the local server by typing the following into the terminal - python manage.py runserver

6. Open http://127.0.0.1:8000/admin and login.

7. To run the React web app, cd into the frontend directory and type the following into your terminal - 
yarn build

    7a. If you don't have yarn installed on your machine, you can install Yarn (https://brew.sh/) through the Homebrew package manager by typing the following into the terminal - brew install yarn

    7b. Open http://127.0.0.1:8000 and you are good to go!

####FAQ

**Why are the React and Django app running on the same port?**
We chose to do that! If you want to take advantage of hot reloading, run yarn start and open localhost:3000. While running on this server, you will not be able to make any API requests.

**When I run pip install -r requirements.txt, I keep getting an error that says "Running setup.py install for psycopg2 ... error." What now?**
In your virtual environment, run the commands - 
1. brew install postgresql 
2. export LDFLAGS="-L/usr/local/opt/openssl/lib"
3. export CPPFLAGS="-I/usr/local/opt/openssl/include"
4. pip3 install psycopg2
5. pip3 install django-heroku


