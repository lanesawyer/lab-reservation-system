var mongoose     = require('mongoose'),
    passport     = require('passport'),
    LdapStrategy = require('passport-ldapauth').Strategy,
    User         = mongoose.model('User');

console.log('Initializing Passport...');

//Serialize sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//LDAP Login
passport.use(new LdapStrategy({
    server: {
      url: 'ldap://ldap.byu.edu:389',
      adminDn: 'uid={{username}},ou=People,o=byu.edu',
      adminPassword: '',
      searchBase: 'ou=People,o=byu.edu',
      searchFilter: '(uid={{username}})',
      usernameField: 'uid',
    }
  },
  function(LDAP_user, done) {
    User.findOne({ type: 'user' }, function(err, user) {
      if(!!err) {
        done(err, null);
      }
      if (!user) {
        user = new User();
        user.netId = LDAP_user.uid;
        user.name = LDAP_user.displayName;
        user.email = LDAP_user.mail;
        user.role = "student";
        user.save();

        console.log('Login (local) : { id: ' + user.id + ', netId: ' + user.netId + ' }');
        done(null, user);
      }
    });
  }
));

module.exports = passport;
