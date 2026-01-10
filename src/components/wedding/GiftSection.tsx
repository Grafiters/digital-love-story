import { useState } from "react";
import { Gift, Copy, Check, CreditCard, Wallet } from "lucide-react";
import { toast } from "sonner";

const bankAccounts = [
  {
    bank: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountName: "Andi Pratama",
    icon: CreditCard,
    color: "bg-blue-500",
  },
  {
    bank: "Bank Mandiri",
    accountNumber: "0987654321",
    accountName: "Sarah Amelia",
    icon: Wallet,
    color: "bg-gold",
  },
];

const GiftSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast.success("Nomor rekening berhasil disalin!");
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast.error("Gagal menyalin nomor rekening");
    }
  };

  return (
    <section className="py-20 px-6 bg-blue-600">
      <div className="max-w-lg mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream/10 mb-6">
          <Gift className="w-8 h-8 text-cream" />
        </div>
        
        <p className="section-subtitle text-blue-100 mb-3">Hadiah Pernikahan</p>
        <h2 className="section-title text-cream mb-4">Kirim Hadiah</h2>
        <div className="gold-divider mb-6" />
        <p className="text-cream/80 text-sm font-body mb-10 max-w-sm mx-auto">
          Doa restu Anda adalah hadiah terindah. Namun jika Anda ingin memberikan hadiah, 
          kami menyediakan amplop digital di bawah ini.
        </p>

        <div className="space-y-4">
          {bankAccounts.map((account, index) => (
            <div
              key={index}
              className="wedding-card text-left"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${account.color} flex items-center justify-center`}>
                  <account.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-body font-semibold text-primary text-sm mb-1">
                    {account.bank}
                  </h4>
                  <p className="font-display text-2xl text-secondary tracking-wide mb-1">
                    {account.accountNumber}
                  </p>
                  <p className="text-muted-foreground text-sm font-body">
                    a.n. {account.accountName}
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(account.accountNumber, index)}
                  className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  {copiedIndex === index ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
