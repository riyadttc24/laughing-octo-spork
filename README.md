# laughing-octo-sporkimport { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Input } from "@/components/ui/input"; import { Button } from "@/components/ui/button";

export default function BigSmallPredictor() { const [numbers, setNumbers] = useState("5,6,0,7,0,5,7,6,4,1"); const [prediction, setPrediction] = useState("");

const isBig = (num) => parseInt(num, 10) >= 5;

const analyze = () => { const nums = numbers .split(",") .map((n) => n.trim()) .filter((n) => n !== "" && !isNaN(n));

if (nums.length < 5) {
  setPrediction("অনুগ্রহ করে অন্তত ৫টি সংখ্যা দিন।");
  return;
}

const bigCount = nums.filter((n) => isBig(n)).length;
const smallCount = nums.length - bigCount;

let next;
if (bigCount > smallCount) next = "Small";
else if (smallCount > bigCount) next = "Big";
else next = Math.random() > 0.5 ? "Big" : "Small";

setPrediction(`সম্ভাব্য পরবর্তী রেজাল্ট: ${next}`);

};

return ( <div className="max-w-md mx-auto mt-10 p-4"> <Card className="shadow-xl rounded-2xl"> <CardContent className="space-y-4"> <h1 className="text-xl font-bold text-center">Big/Small প্রেডিকশন টুল</h1> <Input value={numbers} onChange={(e) => setNumbers(e.target.value)} placeholder="শেষ ১০টি সংখ্যা লিখুন (কমা দিয়ে)" /> <Button onClick={analyze} className="w-full bg-blue-500 hover:bg-blue-600 text-white"> প্রেডিকশন দেখুন </Button> {prediction && <p className="text-center text-lg font-semibold">{prediction}</p>} </CardContent> </Card> </div> ); }

