# WikiGiphy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project Requirements

In this homework assignment you will build an application that has two views and 
two different api calls to external web services. The first view will be in 
the app component and has a search input as well as at least one img element.
The first request will search wikipedia based on the users search text. 
The results will contain the closest matches returned from wikipedia. 
The second request will be to giphy.com, returning giphys related to the users search text. 
You can then bind the giphy url to the src attribute for the img element in the app component
YOU WILL HAVE TWO WEEKS TO COMPLETE THIS HOMEWORK ASSIGNMENT, 
START EARLY ON THIS HOMEWORK !!! DUE NOVEMBER 7 11:59 PM
_______________________________________________________________________________________
PART - 1
[]add a link to app component that navigates to a searchHistory component. be sure to
      include a route for the searchHistory component
[]the search history component should include a link to navigate back to the app
      component when clicked
[]EXTRA CREDIT :: include a redirection route to handle redirecting to the app 
      component in situations where the user types an incorrect ur
_______________________________________________________________________________________
PART - 2
[] In the app component bind an input element to capture the users search text
[]Create a service that searches wikipedia for the user search text and returns a promise
       that displays the results in the app component view. For example, a wiki search of 
      "dog" returns the text "Dog Dog meat Dogs in warfare Dog behavior …"
[]the search history component should display the users search history and a timestamp
      for each search. There should be a corresponding array storing the users searches
[]EXTRA CREDIT : ADD THE USERS SEARCH HISTORY TO A LIST ’searchHistory' IN  
      FIREBASE. THE PAYLOAD SHOULD LOOK LIKE THIS
        searchHistory/{
                                Userid: ’sdfapuhaph’
                                searchText: ‘dog’,
                                createdAt: ’timestamp'
                              }
_______________________________________________________________________________________
PART-3
[]create your own giphy account at the following url 
      "https://developers.giphy.com/explorer/" . you can login with a facebook
        account or using your email.
[]use the developers console to generate a query like the following request url for dog giphyus ..... "https://api.giphy.com/v1/gifs/search?api_key=[YOUR-API-KEY]&q=dog&limit=5&offset=0&rating=G&lang=en"
[]create a new service that sends a request to the giphy api using the above
       url. the returned search results should be a json payload containing giphys 
       related to the users search text.  The user search text should be added to
       the api request as the “q” parameter in the above url
[]in the app component display at least one of the giphy responsem images.                    
[]Do this by creating an img element in the app component binding a
      giphy url to the src attribute of the image element. 
* in the case of the dog query the url can be found in the response payload like this "data" : {"images": "fixed_height_downsampled" : "url": "https://media1.giphy.com/media/12pJ8OxSWwO86Y/200_d.gif" ....
*  If everything is working correctly you will see different giphys in the app component depending on the users search text
_______________________________________________________________________________________
PART - 4 EXTRA CREDIT
ADD 2 TESTS FOR THE APPLICATION SERVICES.  EACH TEST SHOULD TEST THE API REQUEST RESULTS
FOR EXAMPLE - ONE TEST TO THE GIPHY API COULD BE THE EXPECTATION OF MAKING A REQUESTION 
WITHOUTH THE API KEY
