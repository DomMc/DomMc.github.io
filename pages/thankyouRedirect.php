<!DOCTYPE html>
<html>

    <head>

        <link href = "../css/style.css" rel = "stylesheet" type = "text/css">
        <meta charset = "utf-8">
        <meta http-equiv = "Refresh" content= "5 ; index.html"/>
        
        <title>Dom McCollum | Message Submitted</title>

    </head>

    <body>

        <?php //Read in data and append contact text file.

        //If the submit button is pressed.
        if (isset($_POST['Send']))
        {
            //Assign form data to variables.
            $name = $_POST['Name'];
            $contact = $_POST['Contact'];
            $subject = $_POST['Subject'];
            $message = $_POST['Message'];
            
            //Format text file output so that each entry appears on a seperate line. At the same time, check the inputs for malicious entries.
            $data = check_input($name.PHP_EOL.$contact.PHP_EOL.$subject.PHP_EOL.$message);
            
            //Create a file using the date, persons name and subject to make the file name. Then write data variable to the file and close the file.
            $messages = fopen(date('d-m-Y').'_'.$name.'_'.$subject.'.txt', "a");
            fwrite($messages, $data);
            fclose($messages);
        }

        //Remove special characters and whitespace that could be used as part of malicious attacks on the website.
        function check_input($input)
        {
            $input = trim($input);
            $input = stripslashes($input);
            $input = htmlspecialchars($input);

            return $input;
        }
        ?>

        <h1 class = "thanksPage">
            Thanks, I'll be in touch as soon as I can!
        </h1>

        <a href = "index.html" title = "Homepage" class = "continue">
            <button type = "button" alt = "Continue button. Follow the link to get back to the homepage">
                Continue
            </button>
        </a>

        <h2>
            This page will redirect shortly, if it doesn't, please press continue.
        </h2>

        <footer class = "thanksPage">
            Copyright, Dom McCollum 2020
        </footer>
    </body>

</html>