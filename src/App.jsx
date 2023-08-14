function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/for-sale" element={<Sale />}></Route>
        <Route path="/for-rent" element={<Rent />}></Route>
        <Route path="/house-prices" element={<HousePrices />}></Route>
        <Route path="/agent-valuation" element={<AgentValuation />}></Route>
        <Route path="/instant-valuation" element={<InstantValuation />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<Account />} path="/account" />
          <Route element={<Saved />} path="/saved" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
