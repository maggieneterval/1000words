/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Scene = db.model('scene');
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            username: 'joedotjs',
            email: 'testing@fsa.com',
            password: 'password',
            photoUrl: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1824/original/joseph-alves-instructor-spotlight-fullstack.png'
        },
        {
            username: 'potus_with_the_mostest',
            email: 'obama@gmail.com',
            password: 'potus',
            photoUrl: 'http://cp91279.biography.com/1000509261001/1000509261001_2008586720001_BIO-Barack-Obama-SF-FIX-Retry.jpg'
        },
        {
            username: 'joebidenmytime',
            email: 'biden@usa.usa',
            password: 'biden',
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Official_portrait_of_Vice_President_Joe_Biden.jpg'
        },
        {
            username: 'dont_thiel_me_what_to_do',
            email: 'pete@palantir.com',
            password: 'seastead',
            photoUrl: 'http://www.post-gazette.com/image/2014/12/28/peter-thiel.jpg'
        },
        {
            username: 'heybeybeyhey',
            email: 'bey@bey.bey',
            password: 'bey',
            photoUrl: 'https://cbsradionews.files.wordpress.com/2016/02/beyonce-super-bowl-50.jpg?w=640&h=360&crop=1'
        },
        {
            username: 'yeswekaine',
            email: 'tim@kaine.com',
            password: 'timmy',
            photoUrl: 'http://www.usnews.com/dims4/USNEWS/efc5812/2147483647/thumbnail/970x647/quality/85/?url=%2Fcmsmedia%2Ff9%2F6c5c25aeea1d5dcafb6437eb55dbc7%2Fresizes%2F1500%2Fmedia%3Afa10fd0137a045ed9dd5d689c34dd074Campaign2016KaineProfile.JPEG'
        },
        {
            username: 'bushonabike',
            email: 'george@usa.com',
            password: 'george',
            photoUrl: 'http://cbsnews1.cbsistatic.com/hub/i/r/2013/08/07/4166f889-1c4d-11e3-9918-005056850598/thumbnail/620x350/0702e026cece86231b924c265e90cf00/CTM_0807_GWBush.jpg'
        },
        {
            username: 'billtforspeed',
            email: 'bill@bill.bill',
            password: 'bill',
            photoUrl: 'http://assets.nydailynews.com/polopoly_fs/1.84300.1371072394!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/bill-clinton.jpg'
        }
    ];

    // https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/036/258/26f3ebe.jpg

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

var seedScenes = function () {
    var scenes = [
        {
            photoUrl: 'http://rdcnewscdn.realtor.com/wp-content/uploads/2015/12/country-house.jpg',
            dimension: 'location',
            scale: 'low'
        },
        {
            photoUrl: 'http://www.nationalgeographic.com/new-york-city-skyline-tallest-midtown-manhattan/assets/img/articleImg/01nyskyline1536.jpg',
            dimension: 'location',
            scale: 'high'
        },
        {
            photoUrl: 'https://thumbs.mic.com/MDNhODY3ZmYzYyMvT0RwcmxoRHlXS2JWMWxjTXFUVTJ4LXVhS0gwPS83MHg5Ojk1NHg1NjcvODQweDUzMC9maWx0ZXJzOnF1YWxpdHkoNzApL2h0dHA6Ly9zMy5hbWF6b25hd3MuY29tL3BvbGljeW1pYy1pbWFnZXMvZnpndGptZ3ZqZXpqcGFlbGNvczhpaDI3c3B6ZHV1Zzd2ZTF6d3YyOHZrc2lsanZnbG00cm9xcXEzeml0bTkzai5qcGc=.jpg',
            dimension: 'extroversion',
            scale: 'low'
        },
        {
            photoUrl: 'http://cache2.asset-cache.net/xd/725-48.jpg?v=1&c=IWSAsset&k=2&d=F13A1F9190F009367B6B44124BFF8507DA126D067ABD68764D464E701AB7A46C879D000F7E7BD7FE',
            dimension: 'location',
            scale: 'high'
        },
        {
            photoUrl: 'https://www.punchbowl.com/gridfs/fs/4ee7c0c314f092466a000090-1323811013',
            dimension: 'extroversion',
            scale: 'high'
        },
        {
            photoUrl: 'http://irisharoundoz.com/blog/wp-content/uploads/2015/02/Romantic-Dinner.jpg',
            dimension: 'extravagance',
            scale: 'high'
        },
        {
            photoUrl: 'http://www.bridebox.com/blog/wp-content/uploads/2014/11/couple-cooking-date.jpg',
            dimension: 'extravagance',
            scale: 'low'
        },
        {
            photoUrl: 'https://beautiesandbabies.files.wordpress.com/2015/03/family_photography_los_angeles_0295.jpg',
            dimension: 'family',
            scale: 'high'
        },
        {
            photoUrl: 'http://destinationtweed.com.au/wp-content/uploads/formidable/Peppers-Salt-Resort-_-Spa-couple-poolside.jpg',
            dimension: 'extravagance',
            scale: 'high'
        },
        {
            photoUrl: 'http://www.hobbiesforcouples.com/wp-content/uploads/2014/05/shutterstock_109534559.jpg',
            dimension: 'location',
            scale: 'low'
        },
        {
            photoUrl: 'http://65.media.tumblr.com/7e89d450d33b0844773e69a434dfb4c7/tumblr_ncqfphoTTt1u0r2bgo1_500.jpg',
            dimension: 'partnership',
            scale: 'low'
        },
        {
            photoUrl: 'http://assets.inarkansas.com/18321/1950s-housewife-wife-kitchen-cleaning-cooking-pots-and-pans.jpg',
            dimension: 'partnership',
            scale: 'low'
        },
        {
            photoUrl: 'http://cdn2.thegrindstone.com/wp-content/uploads/2014/06/shutterstock_177870728.jpg',
            dimension: 'partnership',
            scale: 'high'
        },
        {
            photoUrl: 'https://organiseme.files.wordpress.com/2011/03/couple-cleaning.jpg',
            dimension: 'partnership',
            scale: 'high'
        },
        {
            photoUrl: 'http://momitforward.com/wp-content/uploads/2010/10/78156676.jpg',
            dimension: 'family',
            scale: 'high'
        },
        {
            photoUrl: 'http://towleroad.typepad.com/.a/6a00d8341c730253ef019b00946141970d-800wi',
            dimension: 'location',
            scale: 'low'
        },
        {
            photoUrl: 'http://www.livescience.com/images/i/000/038/114/original/lesbian-parents-baby.jpg',
            dimension: 'family',
            scale: 'high'
        }
    ];

    var creatingScenes = scenes.map(function (sceneObj) {
        return Scene.create(sceneObj);
    });

    return Promise.all(creatingScenes);
}

db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(function () {
        return seedScenes();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
