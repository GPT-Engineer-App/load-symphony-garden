import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-800 flex items-center justify-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="A cute cat" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg mb-8"
        />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Characteristics of Cats</CardTitle>
            <CardDescription>What makes cats unique?</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Independent nature</li>
              <li>Excellent hunters with sharp claws and teeth</li>
              <li>Flexible bodies and quick reflexes</li>
              <li>Keen senses, especially hearing and night vision</li>
              <li>Communicate through vocalizations, body language, and scent</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>Some well-known cat breeds around the world</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4">
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Siamese</h3>
                <p>Known for their distinctive coloring and vocal nature</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Maine Coon</h3>
                <p>Large, friendly cats with long fur and tufted ears</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Persian</h3>
                <p>Recognizable for their flat faces and long, fluffy coats</p>
              </li>
              <li className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold">Bengal</h3>
                <p>Wild-looking cats with spotted or marbled coats</p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
