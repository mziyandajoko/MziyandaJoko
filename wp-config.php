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
define( 'DB_NAME', 'MziyandaJoko#1' );

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
define( 'AUTH_KEY',         '0$[~A|xrWRgb1Ha6xLX&;P|afX+`W@ZAV P1Fdb%1K._BC:(eb}$ZJg9xXW_lIyC' );
define( 'SECURE_AUTH_KEY',  '>FJW+hL<*B|?w>$K+@xgVp(AE>_ l7l8j0@>17CJ8{~00hqw!XTlu8?I*Hs(=?ad' );
define( 'LOGGED_IN_KEY',    '6[<[9%-vAO[is~Pr:unDh?m{XS Ex]F.{q1q^D%]W&h{d>WfO+oK_jiC )&~FQzV' );
define( 'NONCE_KEY',        '@oP%ZZ&^vqf:%*on1d.hf,s_V,^/iyS0}IszrDdV:n%[xPsVKxU~>]uWZ#e`K@Ix' );
define( 'AUTH_SALT',        'Z=;@ 8/OO>rHZ>`mDJZdlXoN6<o!eoy|hb`Z^WLm$`?VV<-]Je#bI?v)X6&Z3Pw4' );
define( 'SECURE_AUTH_SALT', '[!WrQIG@8H2eC];OdHhRA-XyYR<$*rs+`2DXHGcthiKo0nAc@LzrUC$|mQG[w#l#' );
define( 'LOGGED_IN_SALT',   'M;&?|gdeZTGR41}zP*g[ALAxtZa[l`NEaoDF&P(ULJLu%L`yMv<Ed3l(2s#cGhbg' );
define( 'NONCE_SALT',       ':jpp99n,w(o~wYG%LkRrPHdU:<JbpODFI>TxgQr~38m gcvPlj`OYIQq&;*<gD,e' );

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
