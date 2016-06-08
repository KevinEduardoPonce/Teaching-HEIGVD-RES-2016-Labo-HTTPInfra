FROM php:5.6-apache

COPY conf/ /etc/apache2

#Active les modules proxy
RUN a2enmod proxy proxy_http

#Active les virtualHost
RUN a2ensite 000-* 001-*
