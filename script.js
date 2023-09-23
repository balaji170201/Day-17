
        var humidity1;
        var pressure1;
        var humidity2;
        var pressure2;
        var humidity3;
        var pressure3;

        var extract = fetch('https://restcountries.com/v2/all')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //var randomIndex = Math.floor(Math.random() * data.length);
            var first = data[2];
            var name1 = first.name;
            var cap1 = first.capital;
            var reg1 = first.region;
            var code1 = first.cioc;
            var flag1 = first.flags.svg;
            var latitude = first.latlng[0];
            var longitude = first.latlng[1];
            console.log(`${latitude},${longitude}`);
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7ec61bd8dfa9e228cd576ac80f210d84`)
            .then((response) => response.json())
            .then((data) => {
                humidity1 = data.main.humidity;
                pressure1 = data.main.pressure;

                console.log(data);
            });
        
        
        let container = document.createElement('div');      //outer div
        container.setAttribute('class','container');
        document.body.append(container);

        let row = document.createElement('div');            //row
        row.setAttribute('class','row');
        container.append(row);

        let col1 = document.createElement('div');           //col1
        col1.classList.add('col-sm-12','col-lg-4');
        row.append(col1);

        let card1 = document.createElement('div');          //card1
        card1.classList.add('card','text-center');
        col1.append(card1);

        let heading1 = document.createElement('p');         //card1 header
        heading1.setAttribute('class','card-header');
        heading1.innerText = name1;
        card1.append(heading1);

        let body1 = document.createElement('div');          //card-body1
        body1.setAttribute('class','card-body');
        card1.append(body1);

        let img1 = document.createElement('img');           //image1
        img1.setAttribute('src',flag1);
        img1.setAttribute('class','card-img-top');
        img1.setAttribute('alt','Afghanistan flag');
        body1.append(img1);

        let capital1 = document.createElement('p');        //capital1
        capital1.classList.add('top','card-text');
        capital1.innerText = `Capital : ${cap1}`;
        body1.append(capital1);

        let region1 = document.createElement('p');          //region1
        region1.setAttribute('class','card-text');
        region1.innerText = `Region : ${reg1}`;
        body1.append(region1);

        let countrycode1 = document.createElement('p');     //countrycode1
        countrycode1.setAttribute('class','card-text');
        countrycode1.innerText = `Country Code : ${code1}`;
        body1.append(countrycode1);

        let button1 = document.createElement('a');          //button1
        button1.setAttribute('href','');
        button1.classList.add('btn','btn-primary','button');
        //button1.innerText = "Click for Weather";
        body1.append(button1);
        
        let text1 = document.createElement('p');
        text1.setAttribute('class','text')
        text1.innerText = "Click for Weather";
        button1.append(text1);

        button1.addEventListener('click',function() {
            alert(`Humidity : ${humidity1} & Pressure : ${pressure1}`);
            
        });

        
        // ------------------------------------------------------------
        var extract2 = fetch('https://restcountries.com/v2/all')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //var randomIndex = Math.floor(Math.random() * data.length);
            var second = data[31];
            var name2 = second.name;
            var cap2 = second.capital;
            var reg2 = second.region;
            var code2 = second.cioc;
            var flag2 = second.flags.svg;
            var latitude2 = second.latlng[0];
            var longitude2 = second.latlng[1];
            console.log(`${latitude},${longitude}`);
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude2}&lon=${longitude2}&appid=7ec61bd8dfa9e228cd576ac80f210d84`)
            .then((response) => response.json())
            .then((data) => {
                humidity2 = data.main.humidity;
                pressure2 = data.main.pressure;

                console.log(data);
            });

            var col2 = document.createElement('div');           //col2
            col2.classList.add('col-sm-12','col-lg-4');
            row.append(col2);

            var card2 = document.createElement('div');          //card2
            card2.classList.add('card','text-center');
            col2.append(card2);

            var heading2 = document.createElement('p');         //card2 header
            heading2.setAttribute('class','card-header');
            heading2.innerText = name2;
            card2.append(heading2);

            var body2 = document.createElement('div');          //card-body2
            body2.setAttribute('class','card-body');
            card2.append(body2);

            var img2 = document.createElement('img');           //image2
            img2.setAttribute('src',flag2);
            img2.setAttribute('class','card-img-top');
            img2.setAttribute('alt',`${name2} flag`);
            body2.append(img2);

            var capital2 = document.createElement('p');        //capital2
            capital2.classList.add('card-text','top');
            capital2.innerText = `Capital : ${cap2}`;
            body2.append(capital2);

            var region2 = document.createElement('p');          //region2
            region2.setAttribute('class','card-text');
            region2.innerText = `Region : ${reg2}`;
            body2.append(region2);

            var countrycode2 = document.createElement('p');     //countrycode2
            countrycode2.setAttribute('class','card-text');
            countrycode2.innerText = `Country Code : ${code2}`;
            body2.append(countrycode2);

            var button2 = document.createElement('a');          //button2
            button2.setAttribute('href','');
            button2.classList.add('btn','btn-primary','button');
            //button2.innerText = "Click for Weather";
            body2.append(button2);

            let text2 = document.createElement('p');
            text2.setAttribute('class','text')
            text2.innerText = "Click for Weather";
            button2.append(text2);
            
            button2.addEventListener('click',function() {
            alert(`Humidity : ${humidity2} & Pressure : ${pressure2}`);
            
        });
        
        // ---------------------------------------------------------------

        var extract3 = fetch('https://restcountries.com/v2/all')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            //var randomIndex = Math.floor(Math.random() * data.length);
            var third = data[210];
            var name3 = third.name;
            var cap3 = third.capital;
            var reg3 = third.region;
            var code3 = third.cioc;
            var flag3 = third.flags.svg;
            var latitude3 = third.latlng[0];
            var longitude3 = third.latlng[1];
            console.log(`${latitude3},${longitude3}`);
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude3}&lon=${longitude3}&appid=7ec61bd8dfa9e228cd576ac80f210d84`)
            .then((response) => response.json())
            .then((data) => {
                humidity3 = data.main.humidity;
                pressure3 = data.main.pressure;

                console.log(data);
            });

        var col3 = document.createElement('div');           //col3
        col3.classList.add('col-sm-12','col-lg-4');
        row.append(col3);

        var card3 = document.createElement('div');          //card3
        card3.classList.add('card','text-center');
        col3.append(card3);

        var heading3 = document.createElement('p');         //card3 header
        heading3.setAttribute('class','card-header');
        heading3.innerText = name3;
        card3.append(heading3);

        var body3 = document.createElement('div');          //card-body3
        body3.setAttribute('class','card-body');
        card3.append(body3);

        var img3 = document.createElement('img');           //image3
        img3.setAttribute('src',flag3);
        img3.setAttribute('class','card-img-top');
        img3.setAttribute('alt',`${name3} flag`);
        body3.append(img3);

        var capital3 = document.createElement('p');        //capital3
        capital3.classList.add('top','card-text');
        capital3.innerText = `Capital: ${cap3}`;
        body3.append(capital3);

        var region3 = document.createElement('p');          //region3
        region3.setAttribute('class','card-text');
        region3.innerText = `Region : ${reg3}`;
        body3.append(region3);

        var countrycode3 = document.createElement('p');     //countrycode3
        countrycode3.setAttribute('class','card-text');
        countrycode3.innerText = `Country Code : ${code3}`;
        body3.append(countrycode3);

        var button3 = document.createElement('a');          //button3
        button3.setAttribute('href','');
        button3.classList.add('btn','btn-primary','button');
        //button3.innerText = "Click for Weather";
        body3.append(button3);
        
        let text3 = document.createElement('p');
        text3.setAttribute('class','text')
        text3.innerText = "Click for Weather";
        button3.append(text3);
        
        button3.addEventListener('click',function() {
            alert(`Humidity : ${humidity3} & Pressure : ${pressure3}`);
        });
    });    
    });
    });
   