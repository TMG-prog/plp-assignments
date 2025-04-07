crypto_db = {
    "Bitcoin": {
        "price_trend": "rising",
        "market_cap": "high",
        "energy_use": "high",
        "sustainability_score": 3/10
    },
    "Ethereum": {
        "price_trend": "stable",
        "market_cap": "high",
        "energy_use": "medium",
        "sustainability_score": 6/10
    },
    "Cardano": {
        "price_trend": "rising",
        "market_cap": "medium",
        "energy_use": "low",
        "sustainability_score": 8/10
    }
}

def get_crypto_advice(user_query):
    if "trending" in user_query or "price" in user_query:
        trending_coins = [coin for coin, data in crypto_db.items() if data["price_trend"] == "rising"]
        return f"Coins trending up: {', '.join(trending_coins)} 🚀"

    elif "sustainable" in user_query:
        recommend = max(crypto_db, key=lambda x: crypto_db[x]["sustainability_score"])
        return f"Invest in {recommend}! 🌱 It’s eco-friendly and has long-term potential!"

    elif "buy" in user_query or "growth" in user_query:
        profitable_coins = [coin for coin, data in crypto_db.items() if data["price_trend"] == "rising" and data["market_cap"] == "high"]
        return f"For long-term growth, consider buying: {', '.join(profitable_coins)} 📈"

    return "I’m not sure about that. Could you clarify your question? "

def main():
    print("Remember to do your reseach as crypto currency is risky!")
    print("Welcome I am Tracy's cypro friend! How can I assist you today?")

    while True:
        user_query = input("You: ")
        if user_query.lower() in ['exit', 'quit']:
            print("CryptoBuddy: Goodbye!")
            break
        response = get_crypto_advice(user_query)
        print(f"CryptoBuddy: {response}")

if __name__ == "__main__":
    main()