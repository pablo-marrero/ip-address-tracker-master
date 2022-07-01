Este proyecto se encuentra basado en React en su funcionalidad y la utilizacion de CSS3 para su estilado y responsividad.
A su vez en la parte de creación de formulario fue utlizado React-bootstrap, tanto para sus componentes como el estilado de los mismos.
El logueo de usuario, es generado por firebase. Ya sea en la creación de usuario por parte del cliente como en el registro por Google.

Una vez dentro de la plataforma el Proyecto realiza una busqueda de geolocalización aproximada por Ip del usuario, mostrando en una primera instancia la ubicación actual del usuario que se logeo. Pudiendo posteriormente realizar las busquedas mediante direcciones Ip (ipv4 e ipv6). Para esto se utilizó la API IP Geolocation API by IPify (https://geo.ipify.org/), mientras que para el renderizado del mapa se hizo uno de LeafletJS (https://leafletjs.com/)

Tecnologías utilizadas: React, Css3, React-Bootstrap, Bootstrap, Firebase.js, LeafletJS