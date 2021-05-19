<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'myblogsite' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'u_iCpUeXU5vQg/5CdTYPDJ=4SpP^9}=/0@D8);f5:P)U?4NfUHn`@L>fa2?dk$Dw' );
define( 'SECURE_AUTH_KEY',  '{]na{~w=|Pt84&QQ;X2|^!N?4r&{GyY>jCa6C1!sy1CdbE-ne[SBKr>~m$6<Z]^-' );
define( 'LOGGED_IN_KEY',    'seg4wy%COaTz(=R<0^5BMK>uV,)NRDrlL~[5g^{IfOC|q+aLJm[KhJ$K!MjU&[iM' );
define( 'NONCE_KEY',        'UB@m,cDFk:d&xLGI*uU$7-x`-L!]|$;K~H;MxMX,@$v2]odp(WWx5P4EWm-(J-]t' );
define( 'AUTH_SALT',        'n7}2*KRs?^zgA BFb5(U)!l<IrTsw_8bG;nNQntib2coQ!,Zo.3VJQ9p,,piCR$k' );
define( 'SECURE_AUTH_SALT', 'tygf8IV7&G<=P 59cKjVC-o.t##T$Vw-gRAjRr^}(?t1DOP9{Q8os0rt9+iB I%X' );
define( 'LOGGED_IN_SALT',   'RggI_6t1Q4~@qry}@>%F<FMhZnLxa6@G[>BRge92Gs@UqlOi;sGfgxUtp~.f8XvL' );
define( 'NONCE_SALT',       '@W}Z,b/3Xi*gSsJYEUPBorv(An)EQ_9M$30.}>;o.~kqH1[%I:xp =r7$FT?0^gC' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
