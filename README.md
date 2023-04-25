## Guideline For local environment

- Clone the repository in the local environment

- Create the .env file if not found and create the two variable in the .env file for get the images & apis path
    /*** If you use laragon on local environment so your url will be ***/
    ```bash
        MIX_APP_URL=http://coding-challenge.test/
        MIX_API_URL=http://coding-challenge.test/api/
    ```

    /*** Otherwise you can use laravel serve command "php artisan serve" and set the below variables on local environment ***/
    ```bash
        MIX_APP_URL=http://127.0.0.1:8000/
        MIX_API_URL=http://127.0.0.1:8000/api/
    ```

- Set the database in the .env file and run the below commands (Currently I'm using node v18.12.1)
    ```bash
        composer install
        npm install 
        php artisan migrate
        php artisan db:seed
        npm run watch
    ```
    

## Guideline For Deployment

- Clone the repository in the local environment

- Create the .env file if not found and create the two variable in the .env file for get the images & apis path
    ```bash
        MIX_APP_URL=https://something.com/
        MIX_API_URL=https://something.com/api/
    ```

- Set the database in the .env file and run the below commands
    *This command will be run locally one time
    ```bash
        composer install 
    ```
    *This command will be run locally one time
    ```bash
        npm install 
    ```
    *This can be depend on you, if you want to create blank database on live server so you should run on the live
    ```bash
        php artisan migrate 
    ```
    *This can also dependent
    ```bash
    php artisan db:seed
    ```
    *This command will run locally and will upload the public/js files on live server path => public/js
    ```bash
    npm run prod
    ```