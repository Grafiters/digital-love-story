import { useState, useEffect } from "react";
import { Send, MessageCircle, User, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { db } from "@/lib/firebase";
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  Timestamp,
  serverTimestamp
} from "firebase/firestore";

interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
}

const WishesSection = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Real-time listener untuk wishes dari Firestore
  useEffect(() => {
    const wishesRef = collection(db, "wishes");
    const q = query(wishesRef, orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const wishesData: Wish[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          message: data.message,
          createdAt: data.createdAt?.toDate() || new Date(),
        };
      });
      setWishes(wishesData);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching wishes:", error);
      toast.error("Gagal memuat ucapan");
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedMessage) {
      toast.error("Mohon isi nama dan pesan");
      return;
    }

    if (trimmedName.length > 100) {
      toast.error("Nama terlalu panjang (maksimal 100 karakter)");
      return;
    }

    if (trimmedMessage.length > 500) {
      toast.error("Pesan terlalu panjang (maksimal 500 karakter)");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "wishes"), {
        name: trimmedName,
        message: trimmedMessage,
        createdAt: serverTimestamp(),
      });

      setName("");
      setMessage("");
      toast.success("Terima kasih atas ucapan dan doa Anda! 🎉");
    } catch (error) {
      console.error("Error adding wish:", error);
      toast.error("Gagal mengirim ucapan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
            <MessageCircle className="w-8 h-8 text-secondary" />
          </div>
          <p className="section-subtitle mb-3">Ucapan & Doa</p>
          <h2 className="section-title text-primary mb-4">Kirim Ucapan</h2>
          <div className="gold-divider mb-6" />
          <p className="text-muted-foreground text-sm font-body">
            Berikan ucapan dan doa terbaik untuk pengantin
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="wedding-card mb-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-body text-primary mb-2">
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-body text-primary mb-2">
                Pesan & Doa
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis ucapan dan doa untuk pengantin..."
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-colors resize-none"
              />
              <p className="text-xs text-muted-foreground mt-1 text-right">
                {message.length}/500
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-xl bg-secondary text-secondary-foreground font-body font-medium text-sm flex items-center justify-center gap-2 hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Mengirim...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Ucapan</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Wishes List */}
        <div className="space-y-4">
          <h3 className="font-display text-lg text-primary text-center mb-4">
            {wishes.length} Ucapan & Doa
          </h3>
          
          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-secondary" />
            </div>
          ) : wishes.length === 0 ? (
            <p className="text-center text-muted-foreground text-sm py-8">
              Belum ada ucapan. Jadilah yang pertama! 💕
            </p>
          ) : (
            <div className="max-h-96 overflow-y-auto space-y-4 pr-2 scrollbar-hide">
              {wishes.map((wish) => (
                <div key={wish.id} className="wedding-card animate-fade-up">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-brown-500" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-body font-semibold text-primary text-sm truncate">
                          {wish.name}
                        </h4>
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          {formatDate(wish.createdAt)}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm font-body leading-relaxed">
                        {wish.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
