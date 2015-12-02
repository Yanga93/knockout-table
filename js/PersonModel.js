var PersonModel = function () {
    this.firstName = ko.observable("");
    this.options = {
        tableClass: 'table table-striped',
        pageRecords: 5,
        columns: [
            {
                key: 'id', // take data from this key in your object array
                name: 'ID', //name to display on column header
                filter: true, //true or false. if not specified default:false
                width: '' //optional col width in px or perc
                    },
            {
                key: 'email',
                name: 'E-Mail',
                filter: true
                    }
                ]
    };
    this.people = ko.observableArray(
    [
            {
                id: '1223',
                email: 'vaibhav.b.bansal@gmail.com',
                added: '12/10/2015'
            },
            {
                id: '4533',
                email: 'nitesh.kumar@oracle.com',
                added: '24/11/2015'
            },
            {
                id: '8697',
                email: 'abhishek.parida@gmail.com',
                added: '22/09/2015'
            },
            {
                id: '9878',
                email: 'saurabh.sahu@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '9877',
                email: 'saurav.poddar@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '1223',
                email: 'vaibhav.b.bansal@gmail.com',
                added: '12/10/2015'
            },
            {
                id: '4533',
                email: 'nitesh.kumar@oracle.com',
                added: '24/11/2015'
            },
            {
                id: '8697',
                email: 'abhishek.parida@gmail.com',
                added: '22/09/2015'
            },
            {
                id: '9878',
                email: 'saurabh.sahu@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '9877',
                email: 'saurav.poddar@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '1223',
                email: 'vaibhav.b.bansal@gmail.com',
                added: '12/10/2015'
            },
            {
                id: '4533',
                email: 'nitesh.kumar@oracle.com',
                added: '24/11/2015'
            },
            {
                id: '8697',
                email: 'abhishek.parida@gmail.com',
                added: '22/09/2015'
            },
            {
                id: '9878',
                email: 'saurabh.sahu@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '9877',
                email: 'saurav.poddar@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '1223',
                email: 'vaibhav.b.bansal@gmail.com',
                added: '12/10/2015'
            },
            {
                id: '4533',
                email: 'nitesh.kumar@oracle.com',
                added: '24/11/2015'
            },
            {
                id: '8697',
                email: 'abhishek.parida@gmail.com',
                added: '22/09/2015'
            },
            {
                id: '9878',
                email: 'saurabh.sahu@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '9877',
                email: 'saurav.poddar@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '1223',
                email: 'vaibhav.b.bansal@gmail.com',
                added: '12/10/2015'
            },
            {
                id: '4533',
                email: 'nitesh.kumar@oracle.com',
                added: '24/11/2015'
            },
            {
                id: '8697',
                email: 'abhishek.parida@gmail.com',
                added: '22/09/2015'
            },
            {
                id: '9878',
                email: 'saurabh.sahu@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '9877',
                email: 'saurav.poddar@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '1223',
                email: 'vaibhav.b.bansal@gmail.com',
                added: '12/10/2015'
            },
            {
                id: '4533',
                email: 'nitesh.kumar@oracle.com',
                added: '24/11/2015'
            },
            {
                id: '8697',
                email: 'abhishek.parida@gmail.com',
                added: '22/09/2015'
            },
            {
                id: '9878',
                email: 'saurabh.sahu@oracle.com',
                added: '11/12/2015'
            },
            {
                id: '9877',
                email: 'saurav.poddar@oracle.com',
                added: '11/12/2015'
            }
    ]
    );

    this.addPerson = function () {
        this.people.push({
            name: this.firstName()
        })
    };
    this.reset = function () {
        this.people.removeAll();
        this.firstName("");

    };
}
ko.applyBindings(new PersonModel());