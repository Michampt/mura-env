const map = {
	"ADMINDOMAIN": {
        "type": "String",
        "default": "Empty",
        "description": "Controls the URL for accessing the back-end administration area of Mura. Especially useful for when you wish to use SSL for the admin area."
    },
	"ADMINDIR": {
        "type": "String",
        "default": "/admin",
        "description": "A custom path to where the admin directory is located. The path must not be nested in a subdirectory (e.g., /some/custom/path is bad). Essentially, this setting merely allows you to rename, the admin directory, not necessarily move it. If you change this setting, you must reload Mura from the webroot, and not from the back-end administration area."
    },
	"ADMINEMAIL": {
        "type": "String",
        "default": "Empty",
        "description": "Default email address of the primary administrator for the installation of Mura."
    },
	"ADMINSSL": {
        "type": "Boolean",
        "default": "False",
        "description": "False: SSL certificate is not installed for the administration domain.\n\n**True**: SSL certificate is installed for the administration domain."
    },
	"AGGREGATECONTENTQUERIES": {
        "type": "Boolean",
        "default": "False",
        "description": "This setting is only used when the 'Extranet' setting is set to 'On', as found under Site Settings > Modules tab > Extranet (Password Protection), and will only apply to 'content' feed beans using the 'aggregate' functionality.\n\n**False**: Returns an error, unless the logged in user is a member of the 'Admin' group or 'Super User'\n\n**True**: Protected content could be included in any 'content' feed beans created using the 'aggregate' functionality."
    },
	"ALLOWAUTOUPDATES": {
        "type": "Boolean",
        "default": "True",
        "description": "Determines whether links to update the Core and Site files are displayed. Valid options:\n\n**False**: Do not display links to Update Mura Core, or Update Site(s)\n\n**True**: Display links to Update Mura Core, and Update Site(s)"
    },
	"ALLOWEDINDEXFILES": {
        "type": "String",
        "default": "index.cfm,index.json,index.html",
        "description": "Filenames allowed to be used with Mura's directory path URLs."
    },
	"ALLOWLOCALFILES": {
        "type": "Boolean",
        "default": "False",
        "description": "When importing files, Mura checks to see if you allow files to be imported from the local file system."
    },
	"ALLOWSIMPLEHTMLFORMS": {
        "type": "String",
        "default": "True",
        "description": "If false, only FormBuilder forms will be allowed. This is often used for security purposes."
    },
	"APPRELOADKEY": {
        "type": "String",
        "default": "appreload",
        "description": "The URL variable used to trigger Mura to reload the entire application. For security purposes, it is highly recommended to change this setting for production environments."
    },
	"ASSETDIR": {
        "type": "String",
        "default": "Empty",
        "description": "A custom file path to where your site assets should be stored."
    },
	"ASSETPATH": {
        "type": "String",
        "default": "Empty",
        "description": "The URL to where your assets are stored. Can be a domain or a root relative path."
    },
	"AUTODISCOVERPLUGINS": {
        "type": "Boolean",
        "default": "False",
        "description": "If true, Mura will scan the plugins directory for any new plugins, and if found, will auto-register them."
    },
	"AUTORESETPASSWORDS": {
        "type": "Boolean",
        "default": "False",
        "description": "When using the 'Lost Password' functionality, if true it will send a new password via email, otherwise if false, it will send a link via email to auto-login and prompt user to change password."
    },
	"AUTOUPDATEMODE": {
        "type": "String",
        "default": "default",
        "description": "This feature is used when Mura is releasing a public Beta of the next version. Valid options include:\n\ndefault: Don't update to Beta version, when performing an auto-update.\n\npreview: Update to Beta version, when performing an auto-update."
    },
	"BCRYPTPASSWORDS": {
        "type": "Boolean",
        "default": "True",
        "description": "Determines whether or not passwords go through the BCrypt process. If false, passwords are hashed instead."
    },
	"CLIENTMANAGEMENT": {
        "type": "Boolean",
        "default": "False",
        "description": "This is an Application.cfc variable."
    },
	"CLIENTSTORAGE": {
        "type": "String",
        "default": "Empty",
        "description": "This is an Application.cfc variable."
    },
	"CONFIRMSAVEASDRAFT": {
        "type": "Boolean",
        "default": "True",
        "description": "If true, a confirmation alert will appear when you navigate away from a content item without saving it."
    },
	"CONTEXT": {
        "type": "String",
        "default": "Empty",
		"description": "If Mura is installed under a subdirectory of the webroot, you should enter the path here. Mura will typically populate this field automatically, but you may have to enter the information if you move Mura after being installed."
    },
	"COOKIEDOMAIN": {
        "type": "String",
        "default": "Empty",
        "description": "Attribute to describe the scope of cookies."
    },
	"COOKIEPATH": {
        "type": "String",
        "default": "Empty",
        "description": "Another attribute to describe the scope of cookies."
    },
	"CUSTOMTAGPATHS": {
        "type": "String",
        "default": "Empty",
        "description": "A comma-delimited list of custom tag paths. For example, 'c:\\mapped1,c:\\mapped2'"
    },
	"DATASOURCE": {
        "type": "String",
        "default": "Empty",
        "description": "This is the datasource (DSN) Mura should use to access the database."
    },
	"DBCASESENSITIVE": {
        "type": "String",
		"defualt": "False",
        "description": "If your database is case sensitive, (e.g., Oracle, Postgres), then set this to true"
    },
	"DBPASSWORD": {
        "type": "String",
        "default": "Empty",
        "description": "Password for the database. Do not use this, if you're able to define your datasource."
    },
	"DBTYPE": {
        "type": "String",
        "default": "Empty",
        "description": "The database 'type' being used by the datasource. Supported options:\n\nMSSQL\n\nMySQL\n\nPostgres\n\nOracle"
    },
	"DBTABLESPACE": {
        "type": "String",
        "default": "USERS",
        "description": "Used only when dbtype=Oracle"
    },
	"DBUSERNAME": {
        "type": "String",
		"default": "Empty",
        "description": "Do not use this, if you're able to set your able to define your datasource."
    },
	"DEBUGGINGENABLED": {
        "type": "Boolean",
        "default": "True",
        "description": "Controls whether or not Mura should display CFML errors to the browser. If set to false, Mura will display the file found under errortemplate."
    },
	"DEFAULTFILEMODE": {
        "type": "Integer",
        "default": "777",
        "description": "If Mura is installed on a Unix based system, this setting will control the 'default' permissions, in numeric notation."
    },
	"DEFERMURAJS": {
        "type": "Boolean",
        "default": "True",
        "description": "If true, the script reference to Mura.js will include the 'defer' attribute, which means it be executed after the document has been parsed. This will improve the page load performance time."
    },
	"ENABLEMURATAG": {
        "type": "Boolean",
        "default": "True",
        "description": "At a global level, controls whether or not Mura will parse content for Mura [m] tags. May also be controlled at a site-level via the contentRenderer.cfc, on a site-by-site basis."
    },
	"ENCRYPTIONKEY": {
        "type": "String",
        "default": "Hash of getCurrentTemplatePath()",
        "description": "Available for developers to use as an application-level storage for a custom encryption key."
    },
	"ERRORTEMPLATE": {
        "type": "String",
        "default": "/muraWRM/config/error.html",
        "description": "Specifies the location of a file Mura should use when a CFML error occurs, and debuggingenabled=false."
    },
	"FILEDIR": {
        "type": "String",
        "default": "Empty",
        "description": "Optionally specify a custom directory to store Mura files, such as associated images (this does not include files uploaded via the web editor). Defaults to {context}/{SiteID}/cache/file/"
    },
	"FMSHOWAPPLICATIONROOT": {
        "type": "Boolean",
        "default": "True",
        "description": "Controls whether or not the File Manager (CKFinder) displays the application root."
    },
	"FMSHOWSITEFILES": {
        "type": "Boolean",
        "default": "True",
        "description": "Controls whether or not the File Manager (CKFinder) displays site files."
    },
	"FORCEADMINSSL": {
        "type": "Boolean",
        "default": "True",
        "description": "If true, Mura will force 'https' protocol."
    },
	"HASHURLS": {
        "type": "Boolean",
        "default": "False",
        "description": "If true, Mura will generate URLs with directory names as hashes."
    },
	"HASLOCKABLENODES": {
        "type": "Boolean",
        "default": "False",
        "description": "If true, when a content manager is editing content, other content managers will be unable to edit the same content."
    },
	"HSTSMAXAGE": {
        "type": "Integer",
        "default": "1200",
        "description": "View https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security for more information."
    },
	"IMAGEINTERPOLATION": {
        "type": "String",
        "default": "highQuality",
        "description": "Specify a specific interpolation algorithm by name, by image quality, or by performance. See ImageResize for more information. Valid options: highestQuality, highQuality, mediumQuality, highestPerformance, highestPerformance, highPerformance, mediumPerformance, nearest, bilinear, bicubic, bessel, blackman, hamming, hanning, hermite, lanczos, mitchell, quadratic"
    },
	"INDEXFILEINURLS": {
        "type": "Boolean",
        "default": "True",
        "description": "Controls whether or not '/index.cfm' appears in Mura-generated URLs. Valid options:\n\n**False**: Does not include '/index.cfm' in Mura-generated URLs. This option also requires the use of URL rewrite rules for your web server. See web.config.txt or htaccess.txt for more information.\n\n**True**: Includes '/index.cfm' in Mura-generated URLs."
    },
	"JAVASETTINGSLOADCOLDFUSIONCLASSPATH": {
        "type": "Boolean",
        "default": "True",
        "description": "This is an Application.cfc variable."
    },
	"JAVASETTINGSLOADPATHS": {
        "type": "String",
        "default": "/requirements/lib",
        "description": "This is an Application.cfc variable."
    },
	"JAVASETTINGSWATCHEXTENSIONS": {
        "type": "String",
        "default": "jar,class",
        "description": "This is an Application.cfc variable."
    },
	"JAVASETTINGSWATCHINTERVAL": {
        "type": "Integer",
        "default": "60",
        "description": "This is an Application.cfc variable."
    },
	"LEGACYAPPCFC": {
        "type": "Boolean",
        "default": "False",
        "description": "Prior to v7.1, Application.cfc lifecycle files existed under the config/appcfc/ directory, and Mura Plugin developers sometimes linked to some of these files. To ease the upgrade path for legacy plugins, Mura will add stub files back to this location if this setting is set to true"
    },
	"LOCALE": {
        "type": "String",
        "default": "server",
        "description": "Renders dates and times per the selected locale. Valid options are:\nserver\nclient"
    },
	"LOGINSTRIKES": {
        "type": "Integer",
        "default": "4",
        "description": "The number of times a user can attempt to login before being locked out."
    },
	"MAILSERVERIP": {
        "type": "String",
        "default": "Empty",
        "description": "SMTP server address to use for sending email messages."
    },
	"MAILSERVERPASSWORD": {
        "type": "String",
        "default": "Empty",
        "description": "A password to send to SMTP servers that require authentication."
    },
	"MAILSERVERPOPPORT": {
        "type": "Integer",
        "default": "110",
        "description": "POP port"
    },
	"MAILSERVERSMTPPORT": {
        "type": "Integer",
        "default": "25",
        "description": "TCP/IP port on which SMTP server listens for requests"
    },
	"MAILSERVERSSL": {
        "type": "Boolean",
        "default": "False",
        "description": "Whether to use Secure Sockets Layer"
    },
	"MAILSERVERTLS": {
        "type": "Boolean",
        "default": "False",
        "description": "Whether to use Transport Level Security"
    },
	"MAILSERVERUSERNAME": {
        "type": "String",
        "default": "Empty",
        "description": "A username to send to SMTP servers that require authentication."
    },
	"MAXARCHIVEDVERSIONS": {
        "type": "Integer",
        "default": "50",
        "description": "The number of versions to store in Mura."
    },
	"MAXPORTALITEMS": {
        "type": "Integer",
        "default": "1000",
        "description": "Limits the number of total content items to display for pagination purposes on Folder displays."
    },
	"MAXSOURCEIMAGEWIDTH": {
        "type": "Integer",
        "default": "4000",
        "description": "Mura attempts to store the source image when uploading files. If the image size exceeds the width setting here in pixels, Mura will resize down to this setting."
    },
	"MFA": {
        "type": "Boolean",
        "default": "False",
        "description": "Experimental. Multi-factor authentication setting. If set to true, Mura will send email to user with authentication token to use to login."
    },
	"MFAPERDEVICE": {
        "type": "Boolean",
        "default": "False",
        "description": "Experimental. Determines whether you have to use MFA only once per device."
    },
	"MFASENDAUTHCODE": {
        "type": "Boolean",
        "default": "True",
        "description": "Experimental. Set to false, if sending MFA token via a custom method."
    },
	"MODE": {
        "type": "String",
        "default": "production",
        "description": "Sets the mode per the appropriate settings in the section defined as [production], [development], etc. A complete set of key-value pairs is required for each mode. Duplicate the 'default' production set, and edit as necessary. Valid options: production, development, staging, etc."
    },
	"NOTIFYWITHVERSIONLINK": {
        "type": "Boolean",
        "default": "True",
        "description": "Tells Mura when notifications for review are sent whether to send return link to the version history page or directly to the version edit form."
    },
	"ORMAUTOMANAGESESSION": {
        "type": "Boolean",
        "default": "True",
        "description": "This is a CFML ORM setting."
    },
	"OFFLINE404": {
        "type": "Boolean",
        "default": "True",
        "description": "Controls whether Mura returns a 404 status code for offline content."
    },
	"ORMCFLOCATION": {
        "type": "String",
        "default": "Empty",
        "description": "This is a CFML ORM setting."
    },
	"ORMDATASOURCE": {
        "type": "String",
        "default": "Empty",
        "description": "This is a CFML ORM setting."
    },
	"ORMDBCREATE": {
        "type": "String",
        "default": "update",
        "description": "This is a CFML ORM setting."
    },
	"ORMENABLED": {
        "type": "Boolean",
        "default": "True",
        "description": "This is a CFML ORM setting."
    },
	"ORMEVENTHANDLING": {
        "type": "Boolean",
        "default": "True",
        "description": "This is a CFML ORM setting."
    },
	"ORMFLUSHATREQUESTEND": {
        "type": "Boolean",
        "default": "False",
        "description": "This is a CFML ORM setting."
    },
	"ORMLOGSQL": {
        "type": "Boolean",
        "default": "False",
        "description": "This is a CFML ORM setting."
    },
	"ORMSAVEMAPPING": {
        "type": "Boolean",
        "default": "False",
        "description": "This is a CFML ORM setting."
    },
	"ORMSSKIPCFCWITHERROR": {
        "type": "Boolean",
        "default": "False",
        "description": "This is a CFML ORM setting."
    },
	"ORMUSEDBFORMAPPING": {
        "type": "Boolean",
        "default": "False",
        "description": "This is a CFML ORM setting."
    },
	"PING": {
        "type": "Boolean",
        "default": "False",
        "description": "Controls the scheduled task Mura creates for publishing scheduled content, sending scheduled emails, etc. Valid options:\n\n**False**: Mura will attempt to create the scheduled task(s). However, some CFML servers do not allow this to be done programmatically.\n\n**True**: Mura will attempt to create the scheduled task(s). However, some CFML servers do not allow this to be done programmatically."
    },
	"PLUGINDIR": {
        "type": "String",
        "default": "Empty",
        "description": "A custom filepath to where your plugins will be installed. Example: c:\\inetpub\\wwwroot\\plugins"
    },
	"PORT": {
        "type": "Integer",
        "default": "${cgi.SERVER_PORT}",
        "description": "The Port that Mura runs on, and is included in Mura generated links. The Port needs to be the same for both the front end and back end of the site."
    },
	"PROXYPASSWORD": {
        "type": "String",
        "default": "Empty",
        "description": "Network proxy password for external http calls, if needed."
    },
	"PROXYPORT": {
        "type": "Integer",
        "default": "${cgi.SERVER_PORT}",
        "description": "Network proxy port for external http calls, if needed."
    },
	"PROXYSERVER": {
        "type": "String",
        "default": "Empty",
        "description": "Network proxy server for external http calls, if needed."
    },
	"PROXYUSER": {
        "type": "String",
        "default": "Empty",
        "description": "Network proxy user for external http calls, if needed."
    },
	"PURGEDRAFTS": {
        "type": "Boolean",
        "default": "True",
        "description": "Whether or not to purge drafts when a new, active version is published."
    },
	"RECAPTCHASITEKEY": {
        "type": "String",
        "default": "Empty",
        "description": "The global Google reCAPTCHA site key. Used if no setting is entered at a site level via Site Settings."
    },
	"RECAPTCHASECRET": {
        "type": "String",
        "default": "Empty",
        "description": "The global Google reCAPTCHA secret. Used if no setting is entered at a site level via Site Settings."
    },
	"RECAPTCHALANGUAGE": {
        "type": "String",
        "default": "en",
        "description": "The global Google reCAPTCHA language. Used if no setting is entered at a site level via Site Settings."
    },
	"RENDERMURAALERTS": {
        "type": "Boolean",
        "default": "True",
        "description": "Whether or not to display alerts in the Mura administration area."
    },
	"REQUESTTIMEOUT": {
        "type": "Integer",
        "default": "1000",
        "description": "This is an Application.cfc variable."
    },
	"SAMEFORMFIELDASARRAY": {
        "type": "Boolean",
        "default": "False",
        "description": "This is an Application.cfc variable."
    },
	"SCRIPTPROTECT": {
        "type": "Boolean",
        "default": "True",
        "description": "This is an Application.cfc variable."
    },
	"SCRIPTPROTECTIONEXCEPTIONS": {
        "type": "String",
        "default": "body,source,params",
        "description": "This is Mura's internal parsing for script protection. A comma-delimited list of fields to ignore for script protection."
    },
	"MANAGESESSIONCOOKIES": {
        "type": "Boolean",
        "default": "True",
        "description": "This determines whether Mura will manage session cookies."
    },
	"SECURECOOKIES": {
        "type": "Boolean",
        "default": "False",
        "description": "This is an Application.cfc variable."
    },
	"SESSIONCOOKIESEXPIRES": {
        "type": "String",
        "default": "never",
        "description": "This is an Application.cfc variable."
    },
	"SENDFROMMAILSERVERUSERNAME": {
        "type": "Boolean",
        "default": "True",
        "description": "Whether or not to send email messages via the mailserverusername setting."
    },
	"SESSIONHISTORY": {
        "type": "Integer",
        "default": "0",
        "description": "Number of days to be stored for session tracking stats."
    },
	"SESSIONTIMEOUT": {
        "type": "Integer",
        "default": "180",
        "description": "This is an Application.cfc variable."
    },
	"SHOWADMINLOGINHELP": {
        "type": "Boolean",
        "default": "True",
        "description": "Whether or not to display help when attempting to log in to the Mura administration area."
    },
	"SITEIDINURLS": {
        "type": "Boolean",
        "default": "False",
        "description": "Whether or not to include the {SiteID} in links generated by Mura."
    },
	"SORTPERMISSION": {
        "type": "String",
        "default": "editor",
        "description": "Controls which Mura 'role' has the ability to sort content. Valid options are:\n\neditor\n\nauthor"
    },
	"STRICTFACTORY": {
        "type": "Boolean",
        "default": "True",
        "description": "This controls the DI/1 strict setting. If true, DI/1 will throw an exception if it cannot resolve a bean implied by a constructor argument, setter name, or property name. If false, DI/1 simply calls logMissingBean() which writes the failure to the Java console."
    },
	"STRICTHTML": {
        "type": "Boolean",
        "default": "False",
		"description": "If true, Mura will not allow HTML syntax to be used in class extension's extended attributes, unless explicitly excluded via the stricthtmlexclude setting."
    },
	"STRICTHTMLEXCLUDE": {
        "type": "String",
        "default": "Empty",
        "description": "If stricthtml=true, Mura will check this setting for a list of extended attributes to allow HTML syntax. It is not necessary to specify any extended attributes where its 'type' is set to HTMLEditor."
    },
	"STRONGPASSWORDREGEX": {
        "type": "Regex",
        "default": "(?=^.{7,15}$)(?=.*\\d)(?![.\\n])(?=.*[a-zA-Z]).*$",
        "description": "If strongpasswords=true, Mura will use the regular expression (regex) entered here when users create their passwords."
    },
	"STRONGPASSWORDS": {
        "type": "Boolean",
        "default": "False",
        "description": "If true, Mura enforces the strongpasswordregex setting."
    },
	"TEMPDIR": {
        "type": "String",
        "default": "Empty",
        "description": "A custom path for temporary storage for uploaded files."
    },
	"TITLE": {
        "type": "String",
        "default": "Mura CMS",
        "description": "Text to prepend the Site Name in the <title> tag of the Mura Administrator."
    },
	"USEDEFAULTSMTPSERVER": {
        "type": "Boolean",
        "default": "True",
        "description": "Whether or not to use the SMTP server settings stored in the CFML administrator."
    },
	"USEFILEMODE": {
        "type": "Boolean",
        "default": "False",
        "description": "Option to specify that Mura set file permissions for Unix-based systems."
    },
	"WINDOWDOCUMENTDOMAIN": {
        "type": "String",
        "default": "Empty",
        "description": "This setting controls the document.domain setting for Mura's administration UI when editing content via the front-end for potential cross-subdomain issues. See Same-origin policy on the Mozilla Developer Network for more information."
    }
};

module.exports = {map}