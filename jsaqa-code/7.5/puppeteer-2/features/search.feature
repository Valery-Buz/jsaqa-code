Feature: Education

    Scenario: Should sucsess education
        Given go to the page test one "http://qamid.tmweb.ru/client/index.php"
        When choose date by selector "body > main > section:nth-child(1) > div.movie-seances__hall > ul > li:nth-child(3) > a"
        When choose time by selector "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(5)"
        When choose chair by selector "buying-scheme__wrapper > div:nth-child(4)"
        When confirm booking ".acceptin-button"
        When getting booking code ".acceptin-button"
        Then ticket received "Электронный билет"

    Scenario: Should booking two tickets
        Given go to the page "http://qamid.tmweb.ru/client/index.php"
        When click date ".page-nav > a:nth-child(3) > span"
        When click time ".movie div:nth-child(2) > ul > li"
        When click first chair ".buying-scheme__wrapper > div:nth-child(7) > span:nth-child(3)"
        When click second chair ".buying-scheme__wrapper > div:nth-child(7) > span:nth-child(4)"
        When click booking ".acceptin-button"
        When click confirmation code ".acceptin-button"
        Then two ticket received "Электронный билет"

    Scenario: Should check disable booking occuped chair
        Given go to "http://qamid.tmweb.ru/client/index.php"
        When choose date ".page-nav > a:nth-child(2) > span"
        When choose time ".movie div:nth-child(2) > ul > li"
        When choose chair ".buying-scheme__wrapper > div:nth-child(5) > span:nth-child(3)"
        Then button booking disabled ".acceptin-button"