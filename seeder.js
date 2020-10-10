const mocker = require('mocker-data-generator').default;
const fs = require('fs');


const person = {
    name: {
        faker: 'name.findName()'
    },
    email: {
        faker: 'internet.email()'
    }
};

mocker()
    .schema('person', person, 1000)
    .build((err, data) => {
        if (err) {
            console.log(err);
        } else {
            fs.writeFile('db.json', JSON.stringify(data), 'utf8', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Done');
                }
            });
        }
    })