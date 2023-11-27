"use strict";

const $ = selector => document.querySelector(selector);

const displayErrorMessages = msgs => 
{
    let messagesContainer = document.querySelector(".messages-container");

    if (messagesContainer === null) 
    {
        messagesContainer = document.createElement("div");
        messagesContainer.classList.add("messages-container");
        document.body.insertBefore(messagesContainer, document.body.firstChild); 
    } 
    else 
    {
        messagesContainer.innerHTML = "";
    }

    const ul = document.createElement("ul");
    ul.classList.add("messages");
    messagesContainer.appendChild(ul);

    for (let msg of msgs) 
    {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    document.body.insertBefore(messagesContainer, document.body.firstChild);
    const form = document.getElementById("form");
    form.classList.add("messages-displayed");
};

const hideErrorMessages = () => 
{
    const form = document.getElementById("form");
    form.classList.remove("messages-displayed"); 

    const ul = document.querySelector(".messages");
    if (ul) {
        ul.parentNode.removeChild(ul);
    }
};

const processEntries = () => 
{
    event.preventDefault();

    const firstName = $("#first_name");
    const lastName = $("#last_name");
    const email = $("#email_address");
    const phone = $("#phone");
    const state = $("#state");
    const terms = $("#terms");

    const msgs = [];

    if (firstName.value == "") 
    {
        msgs[msgs.length] = "Please enter your first name.";
    }
    if (lastName.value == "") 
    {
        msgs[msgs.length] = "Please enter your last name.";
    }
    if (email.value == "") 
    {
        msgs[msgs.length] = "Please enter an email address.";
    }
    if (phone.value == "") 
    {
        msgs[msgs.length] = "Please enter a mobile phone number.";
    }
    if (state.value == "") 
    {
        msgs[msgs.length] = "Please select a state.";
    }
    if (!terms.checked) 
    {
        msgs[msgs.length] = "You must agree to the terms of service.";
    }

    if (msgs.length > 0) 
    {
        displayErrorMessages(msgs);
    }
    else
    {
        hideErrorMessages();
        submitForm();
    }
};

function resetForm() 
{
    setTimeout(() => 
    {
        const ul = document.querySelector(".messages");
        if (ul) 
        {
            ul.parentNode.removeChild(ul);
        }

        const form = document.getElementById("form");
        form.reset();
        
        form.classList.remove("messages-displayed");
        
        document.getElementById("first_name").focus();
    }, 5000); 
}

document.addEventListener("DOMContentLoaded", () => 
{
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    $("#first_name").focus();
});

function submitForm() 
{
    window.open('thankyou.html', '_blank');
}


document.addEventListener('DOMContentLoaded', function () 
{
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', function () 
    {
        navLinks.classList.toggle('active');
    });
});