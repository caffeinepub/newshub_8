import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type Article = {
    id : Nat;
    title : Text;
    summary : Text;
    category : Text;
    source : Text;
    author : Text;
    publishedAt : Text;
    imageUrl : Text;
    isFeatured : Bool;
    isTrending : Bool;
    isEditorPick : Bool;
  };

  module Article {
    public func compare(article1 : Article, article2 : Article) : Order.Order {
      Nat.compare(article1.id, article2.id);
    };
  };

  let articles = Map.empty<Nat, Article>();
  var nextId = 0;

  func addArticleInternal(article : Article) {
    articles.add(article.id, article);
    nextId += 1;
  };

  func findArticleInternal(id : Nat) : Article {
    switch (articles.get(id)) {
      case (null) { Runtime.trap("Article does not exist") };
      case (?article) { article };
    };
  };

  func putArticleInternal(id : Nat, article : Article) {
    ignore findArticleInternal(id);
    articles.add(id, article);
  };

  func addArticlesInternal(articlesToAdd : [Article]) {
    articlesToAdd.forEach(addArticleInternal);
  };

  func initializeArticles() {
    let initialArticles : [Article] = [
      {
        id = 0;
        title = "Global Markets Rally Amid Economic Recovery";
        summary = "Stock markets around the world saw significant gains today as economies continue to recover from the pandemic.";
        category = "Business";
        source = "Reuters";
        author = "Jane Smith";
        publishedAt = "2023-06-01T09:00:00Z";
        imageUrl = "https://example.com/images/markets.jpg";
        isFeatured = true;
        isTrending = true;
        isEditorPick = false;
      },
      {
        id = 1;
        title = "Tech Giants Announce New Innovations";
        summary = "Leading technology companies revealed groundbreaking products at the annual tech conference.";
        category = "Tech";
        source = "TechCrunch";
        author = "John Doe";
        publishedAt = "2023-06-02T11:30:00Z";
        imageUrl = "https://example.com/images/tech.jpg";
        isFeatured = false;
        isTrending = true;
        isEditorPick = true;
      },
      {
        id = 2;
        title = "World Leaders Meet for Climate Summit";
        summary = "World leaders gathered to discuss urgent climate change initiatives and policies.";
        category = "World";
        source = "BBC News";
        author = "Sarah Lee";
        publishedAt = "2023-06-03T14:15:00Z";
        imageUrl = "https://example.com/images/climate.jpg";
        isFeatured = true;
        isTrending = false;
        isEditorPick = true;
      },
      {
        id = 3;
        title = "Scientists Discover New Exoplanet";
        summary = "Astronomers have identified a new planet outside our solar system, sparking excitement in the scientific community.";
        category = "Science";
        source = "National Geographic";
        author = "Emily Brown";
        publishedAt = "2023-06-04T08:45:00Z";
        imageUrl = "https://example.com/images/exoplanet.jpg";
        isFeatured = false;
        isTrending = true;
        isEditorPick = false;
      },
      {
        id = 4;
        title = "Championship Game Ends in Dramatic Fashion";
        summary = "The championship match was decided in the final moments, leaving fans on the edge of their seats.";
        category = "Sports";
        source = "ESPN";
        author = "Mike Johnson";
        publishedAt = "2023-06-05T19:20:00Z";
        imageUrl = "https://example.com/images/sports.jpg";
        isFeatured = true;
        isTrending = true;
        isEditorPick = false;
      },
      {
        id = 5;
        title = "New Study Reveals Health Benefits of Exercise";
        summary = "Researchers have found that regular physical activity can significantly improve overall health and well-being.";
        category = "Science";
        source = "Scientific American";
        author = "Lisa Green";
        publishedAt = "2023-06-06T10:10:00Z";
        imageUrl = "https://example.com/images/health.jpg";
        isFeatured = false;
        isTrending = false;
        isEditorPick = true;
      },
      {
        id = 6;
        title = "Film Festival Showcases Emerging Talent";
        summary = "The international film festival featured a range of new films from up-and-coming directors.";
        category = "Entertainment";
        source = "Variety";
        author = "David Miller";
        publishedAt = "2023-06-07T16:05:00Z";
        imageUrl = "https://example.com/images/film.jpg";
        isFeatured = true;
        isTrending = false;
        isEditorPick = false;
      },
      {
        id = 7;
        title = "Economic Policies Spark Debate";
        summary = "Experts are divided on the effectiveness of recently implemented economic policies.";
        category = "Opinion";
        source = "The Economist";
        author = "Anna White";
        publishedAt = "2023-06-08T13:40:00Z";
        imageUrl = "https://example.com/images/economy.jpg";
        isFeatured = false;
        isTrending = true;
        isEditorPick = true;
      },
      {
        id = 8;
        title = "Breakthrough in Renewable Energy Technology";
        summary = "Innovations in renewable energy are making sustainable power more accessible and affordable.";
        category = "Tech";
        source = "Wired";
        author = "Tom Wilson";
        publishedAt = "2023-06-09T12:25:00Z";
        imageUrl = "https://example.com/images/renewable.jpg";
        isFeatured = true;
        isTrending = false;
        isEditorPick = false;
      },
      {
        id = 9;
        title = "Historical Discovery Unearthed";
        summary = "Archaeologists have uncovered artifacts that shed new light on ancient civilizations.";
        category = "Science";
        source = "History Channel";
        author = "Karen Taylor";
        publishedAt = "2023-06-10T15:55:00Z";
        imageUrl = "https://example.com/images/archaeology.jpg";
        isFeatured = false;
        isTrending = true;
        isEditorPick = true;
      },
      {
        id = 10;
        title = "Business Leaders Discuss Future Trends";
        summary = "Industry leaders gathered to discuss the future of business in a rapidly changing world.";
        category = "Business";
        source = "Forbes";
        author = "Michael Brown";
        publishedAt = "2023-06-11T17:35:00Z";
        imageUrl = "https://example.com/images/business.jpg";
        isFeatured = true;
        isTrending = false;
        isEditorPick = false;
      },
      {
        id = 11;
        title = "Artists Collaborate on Major Project";
        summary = "Renowned artists from around the world are collaborating on a new project that combines different art forms.";
        category = "Entertainment";
        source = "Art News";
        author = "Samantha Lee";
        publishedAt = "2023-06-12T11:15:00Z";
        imageUrl = "https://example.com/images/art.jpg";
        isFeatured = false;
        isTrending = true;
        isEditorPick = true;
      },
      {
        id = 12;
        title = "Sports Teams Prepare for Upcoming Season";
        summary = "Coaches and players are gearing up for an exciting new season in various sports leagues.";
        category = "Sports";
        source = "Sports Illustrated";
        author = "Robert Davis";
        publishedAt = "2023-06-13T14:30:00Z";
        imageUrl = "https://example.com/images/seasonsports.jpg";
        isFeatured = true;
        isTrending = false;
        isEditorPick = false;
      },
      {
        id = 13;
        title = "Technology Advancements in Healthcare";
        summary = "New technologies are revolutionizing the healthcare industry, improving patient care and outcomes.";
        category = "Tech";
        source = "Healthcare Today";
        author = "Laura Green";
        publishedAt = "2023-06-14T10:50:00Z";
        imageUrl = "https://example.com/images/healthtech.jpg";
        isFeatured = false;
        isTrending = true;
        isEditorPick = true;
      },
      {
        id = 14;
        title = "World Events Impact Global Economy";
        summary = "Recent world events have had a significant impact on the global economy, according to experts.";
        category = "World";
        source = "CNN";
        author = "Steven Clark";
        publishedAt = "2023-06-15T18:00:00Z";
        imageUrl = "https://example.com/images/worldeconomy.jpg";
        isFeatured = true;
        isTrending = false;
        isEditorPick = false;
      },
    ];

    addArticlesInternal(initialArticles);
  };

  initializeArticles();

  func matchesQuery(article : Article, searchText : Text) : Bool {
    searchText != "" and (article.title.toLower().contains(#text searchText) or article.summary.toLower().contains(#text searchText));
  };

  func getArticlesFiltered(predicate : Article -> Bool) : [Article] {
    articles.values().toArray().filter(predicate).sort();
  };

  // QUERY FUNCTIONS

  public query ({ caller }) func getAllArticles() : async [Article] {
    articles.values().toArray().sort();
  };

  public query ({ caller }) func getArticlesByCategory(category : Text) : async [Article] {
    getArticlesFiltered(
      func(article) {
        article.category == category;
      }
    );
  };

  public query ({ caller }) func getFeaturedArticles() : async [Article] {
    getArticlesFiltered(
      func(article) {
        article.isFeatured;
      }
    );
  };

  public query ({ caller }) func getTrendingArticles() : async [Article] {
    getArticlesFiltered(
      func(article) {
        article.isTrending;
      }
    );
  };

  public query ({ caller }) func getEditorPicks() : async [Article] {
    getArticlesFiltered(
      func(article) {
        article.isEditorPick;
      }
    );
  };

  public query ({ caller }) func searchArticles(searchText : Text) : async [Article] {
    getArticlesFiltered(
      func(article) {
        matchesQuery(article, searchText.toLower());
      }
    );
  };
};
