import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Difference between javascript and nodejs?</h2>
            <p>javascript is a programming language that is used for writing script on the website here as Node js is a javascript runtime
                environment. Javescript is only run in the browser but with the help
                of node js  javascripy can run run outside of
                browser. Javescript can interact with dom element but node js can't.
                Javascript is used in frontend development but node js is used for server side development. 
            </p>
            <h2>When should you use nodejs and when should you use mongodb?</h2>
           <p>
           Node js is popularly being used in the web development because its lets the application run and
            facing data from back end server. Enve node js is run with MySql but it is perfact combination run 
            with node js and nosql like mongodb. Mongodb represnet data with collecton rathe than table related
            by foreign keys. Mongodb is open source and perfect for frequently changing data. Its also offer server side
            validation.
           </p>
            <h2>Differences between sql and nosql databases?</h2>
           <p>
           Sql are primary called as relational database whereas nosql database are primary called as non
            relational database or distributed database. Sql database are fixed or static sćhema but nosql have
            dynamic schema. For complex quries sql are best fit rathher than nosql. Sql are vertically scalable but 
            nosql are horizontally scalable.
           </p>
           <h2>What is the purpose of jwt and how does it work?</h2>
           <p>
               Jwt is a machanism to verify the owner of some json data. In most cases it is an encoded
               json that containing a set of claims and signature. It is usually used in the context of other
               authentication manchanisms like OAuth.It is alo a popular way to authenticate /authorize user in the 
               microservice architecture. Jwt token contain three parts header, payload and signature.
               Header consists two parts signature and token parts. Payload are usually contain tha claims and
               additional data. Signarure and typically a hash of header and payload section of jwt. The header 
               payload section of jwt is always Base64 encoded.
                         </p>
        </div>
    );
};

export default Blogs;