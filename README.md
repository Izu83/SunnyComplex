# Sunny Complex

Website for Sunny Complex, a pool and restaurant in Radomir, Bulgaria.

| Page | What it is |
|---|---|
| `/` | Home: pool, seasons, restaurant, reviews, contacts |
| `/menu/` | Full menu, with a cart for home delivery |
| `/reservation/` | Table booking on the floor plan |
| `/admin/` | Staff: reservations |
| `/deliveries/` | Staff: delivery orders and the two couriers |

## Running it

Bookings, orders and the staff pages need the small server in `server.py` (Python 3, standard library only):

```
python server.py 5173 --open
```

On Windows, double-click `start.bat`. The site is then at http://localhost:5173/.

The staff password is created on first run in `data/admin-password.txt`, or set it with the
`SUNNY_ADMIN_PASSWORD` environment variable. Reservations and orders are stored in `data/`,
which is never served to visitors and is not part of this repository.

## On a static host (GitHub Pages)

The pages, menu and floor plan all work, but there is no server to save anything: the booking
and order forms say online booking is unavailable and point guests to the phone, and the staff
pages cannot sign in.
