<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'woocomerce' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '[lJ%@v)#pv_6i^K_R(A*H^@~{G?yroh;$g7B.w4Gb?ke:Zx}lNxFF]2c?lkw<u)P' );
define( 'SECURE_AUTH_KEY',  ':E{`}zc}Jx^ q?ge_kQj_2?l)Ac[QT<Yg?@Wd?f,FN-hTTNadmjqFiL;3x&i}&Ke' );
define( 'LOGGED_IN_KEY',    'ka^H#yj-p]R4nsfartmo?DIkg*(#YAwp}d+<8,vz6/sWm.Aqij)6lgahCpTS8ZaN' );
define( 'NONCE_KEY',        '2G2V2,={+!`0_4:c^cT?Cq?si N.WH K_:aMs.9H<Z~8+C*h,hOGKhK1RpfYR?cW' );
define( 'AUTH_SALT',        ']1I@[#vwrpE:C))u sCk_t^cn^]rs0Axr /Sxa%>+`z>CKS>&-YPb 0Y8Ri9=K&L' );
define( 'SECURE_AUTH_SALT', '?MQD<~#0$&nHaEqUkOaPB-s`=}Vf|bJI/=OP>i0$yE`;yKmHl2+;O$9+Bl3TWKxu' );
define( 'LOGGED_IN_SALT',   '*8T`4!GJVJctWg}AiO$-o(2J=bR-Tivi*QtDrXm#@_F M{^|g99^km&UjG?MnFUB' );
define( 'NONCE_SALT',       ',>5)/n/jc-C$8$@-tt=K; jU^w3QmK4RPyptw#:I&xeDF8h7KMGhyP6]qfiM2@)}' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
