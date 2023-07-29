---
layout: layouts/page.njk
title: Events
---

<style>
  #event-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  #event-list li {
    display: flex;
  }

  #event-list a {
    flex: 1 1 0;
    text-decoration: none;
    border: 2px solid black;
    background-color: white;
    padding: 2rem;
    text-align: center;
    border-radius: 3px;
  }

  time {
    font-size: 90%;
    display: block;
  }

  @media (max-width: 500px) {
    #event-list {
      grid-template-columns: 1fr;
    }
  }
</style>

Events we're planning:

🤫

Events we've run:

<ul id="event-list">
<li><a href="/events/last-card">Last Card<time>July 21-23, 2023</time></a>
<li><a href="/events/boba-cup">Boba Cup<time>April 1, 2023</time></a>
</ul>
