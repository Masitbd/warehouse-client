import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-8 mt-5  container'>
            <h2 className='text-3xl text-red-500 font-bold'>Difference between javascript and nodejs?</h2>
            <p className='text-xl'>javascript is a programming language that is used for writing script on the website where as Node js is a 
                javascript runtime
                environment. Javescript is only run in the browser with the help
                of node js Javascripy can run run outside of
                browser. Javescript can interact with dom element but node js can't.
                Javascript is used in frontend development but node js is used for server side development. 
            </p>
            <h2 className='text-3xl text-red-500 font-bold'>When should we use nodejs and when should we use mongodb?</h2>
           <p className='text-xl'>
           Node js is popularly being used in the web development because its lets the application run and
            facing data from back end server. Enven node js is run with MySql but it is perfact combination run 
            with node js and nosql like mongodb. Mongodb represnet data with collecton rathe than table related
            by foreign keys. Mongodb is open source and perfect for frequently changing data. Its also offer server side
            validation.
           </p>
            <h2 className='text-3xl text-red-500 font-bold'>Differences between sql and nosql databases?</h2>
           <p className='text-xl'>
           Sql are primary called as relational database whereas nosql database are primary called as non
            relational database or distributed database. Sql database are fixed or static schema but nosql have
            dynamic schema. For complex quries sql are best fit rather than nosql. Sql are vertically scalable but 
            nosql are horizontally scalable.
           </p>
           <h2 className='text-3xl text-red-500 font-bold'>What is the purpose of jwt and how does it work?</h2>
           <p className='text-xl'>
               Jwt is a machanism to verify the owner of some json data. In most cases it is an encoded
               json that containing a set of claims and signature. It is usually used in the context of other
               authentication manchanisms like OAuth.It is alo a popular way to authenticate/authorize user in the 
               microservice architecture. Jwt token contain three parts header, payload and signature.
               Header consists two parts signature and token parts. Payload are usually contain the claims and
               additional data. Signarure and typically a hash of header and payload section of jwt. The header 
               payload section of jwt is always Base64 encoded.
            </p>
        </div>
    );
};

export default Blogs;