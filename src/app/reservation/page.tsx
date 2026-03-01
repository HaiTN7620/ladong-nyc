"use client";

export default function ReservationPage() {
  return (
    <div className="pt-32 pb-24 max-w-xl mx-auto px-6">
      <h1 className="font-serif text-5xl mb-10">Reservation</h1>

      <form className="space-y-6">
        <input className="w-full border p-3" placeholder="Name" />
        <input className="w-full border p-3" placeholder="Email" />
        <input className="w-full border p-3" placeholder="Phone" />

        <button className="w-full bg-black text-white py-3">Reserve</button>
      </form>
    </div>
  );
}
