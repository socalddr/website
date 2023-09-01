---
layout: layouts/home.njk
---

<h1 style="text-align: center">Hello, Dancer!</h1>
<h2 style="text-align: center; font-weight: 400">We're hoping to see you at our next tournament!</h2>

<style>
  .event-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .event-list li {
    display: flex;
  }

  .event-list a {
    flex: 1 1 0;
    text-decoration: none;
    border: 2px solid black;
    background-color: white;
    padding: 2rem;
    text-align: center;
    border-radius: 15px;
    color: white;
    background-position: center;
    transition: transform var(--trans-timing);
  }

  .event-list a[href]:hover {
    transform: scale(1.05) rotate(1.5deg);
  }

  .event-list a[href]:active {
    transform: scale(0.95);
  }

  time {
    font-size: 90%;
    display: block;
  }

  :root {
    --shade-gradient: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8))
  }

  #last-card a {
    background-image: var(--shade-gradient), url('/public/last-card.png');
    background-color: #555;
    background-size: 270px;
  }

  #boba a {
    background-image: var(--shade-gradient), url('/public/bobalon-1.png');
    /* background-color: #555; */
    background-size: 150px;
  }

  #boba-2 a {
    background-image: var(--shade-gradient), url('/public/boba2-eyes.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 500px) {
    .event-list {
      grid-template-columns: 1fr;
    }
  }
</style>

<h2>Upcoming Events</h2>

<ul class="event-list">
<li id="boba-2"><a href="/events/boba-cup-2">Boba Cup 2 <time>November 11-12, 2023</time></a></li>
</ul>

<h2>Previous Events</h2>

<ul class="event-list">
<li id="last-card"><a href="/events/last-card">Last Card <time>July 21-23, 2023</time></a>
<li id="boba"><a href="/events/boba-cup">Boba Cup <time>April 1, 2023</time></a>
</ul>
