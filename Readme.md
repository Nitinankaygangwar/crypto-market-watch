# Crypto Trading App – React Native

## Price Update Logic
- Prices are updated using a simulated real-time mechanism.
- A `setInterval` runs every 2–3 seconds.
- On each interval, a small random percentage change is applied to the last traded price.
- The 24h % change is updated accordingly based on price movement.
- No backend or API is used; all updates are simulated on the frontend.

## How Re-renders Are Minimized
- `React.memo` is used for individual crypto rows to prevent unnecessary re-renders.
- `useRef` is used to track previous prices so only the changed price text is highlighted.
- Sorting logic is wrapped inside `useMemo` to avoid recalculations on every render.
- State updates are scoped only to price data, preventing full UI refresh or flickering.

## Time Taken
- Total time taken: **6–7 hours**
  - UI layout & structure: ~2 hours
  - Real-time simulation & sorting logic: ~2 hours
  - Optimization & cleanup: ~1.5 hours
  - Testing on real device & APK build: ~1 hour
