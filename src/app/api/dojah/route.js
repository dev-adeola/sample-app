
const options = {
    app_id: app_id, //your app_id here
    p_key: p_key, //your production public key here
    type: 'custom',
    user_data: {
    first_name: {$first_name}, //optional
    last_name: {$last_name}, //optional
    dob: {$dob}, //YYYY-MM-DD Optional
    residence_country: 'NG', //optional
    email: {$email}//optional
    },
    
    metadata: {
    user_id: '12xxxxsxsxsxssx1',
    },
    
    config: {
    widget_id: "91281818181919191" //this is generated from easyonboard 
    },
    onSuccess: function (response) {
        console.log('Success', response)
    },
    onError: function (err) {
        console.log('Error', err)
    },
    onClose: function () {
        console.log('Widget closed')
    }
}

const connect = new Connect(options)
const button = document.querySelector('#button-connect')
button.addEventListener('click', function () {
    connect.setup()
    connect.open()
})

