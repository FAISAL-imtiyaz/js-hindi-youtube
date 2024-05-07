class BST {
    // BST Class: This is the main class that represents the Binary Search Tree.

    public class Node{
         // Node Class: Defines the structure of a node in the binary search tree. Each node contains a value, a height (which denotes the depth of the node in the tree), and references to its left and right child nodes.
        private int value;
        private int height;
        private Node left;
        private Node right;

        // cunstructor
    //    Constructor: Initializes an empty BST.

        public Node (int value){
            this.value=value;
        }
        public int getValue(){
            return value;
        }
    }
    private Node root;

    public BST(){

    }
    // Height Calculation Method (height(Node node)): Calculates the height of a given node in the tree. The height of a node is defined as the maximum number of edges in any path from the node to a leaf node.
    
    public int height(Node node){
        if(node== null){
            return -1;
        }
        return node.height;

    }
    public  boolean isEmpty(){
        return root == null;
    }
    // Insertion Method (insert(int value)): Inserts a new node with the given value into the BST. It calls the private insert method to recursively traverse the tree and find the appropriate position for insertion.
    public void insert(int value){
         root = insert(value, root);
    }
    // Private Insert Method (insert(int value, Node node)): Recursively inserts a new node with the given value into the subtree rooted at the specified node.
    private Node insert(int value, Node node){
        if(node== null){
            node = new Node(value);
            return node;
        }
        if(value < node.value){
            node.left= insert(value, node.left);

        }
        if(value > node.value){
            node.right = insert(value, node.right);
        }
        node.height= Math.max(height(node.left), height(node.left))+1;
        return node;
    }
    // Balanced Check Method (balanced() and balanced(Node node)): Checks if the BST is balanced or not. A balanced tree is a tree in which the heights of the two subtrees of any node never differ by more than one.

    public boolean balanced(){
        return balanced(root);
    }
    private boolean balanced(Node node){
        if(node == null){
            return true;
        }
        return Math.abs(height(node.left)-height(node.right))<=1 && balanced(node.left)&& balanced(node.right);
    }
    // Display Method (display() and display(Node node, String details)): Displays the nodes of the tree in a hierarchical manner. It prints the value of each node along with its left and right child nodes.
    public void display(){
        display(root,"Root Node");
    }
    private  void display(Node node, String details){
        if(node== null){
            return;
        }
        System.out.println(details + node.value);
        display(node.left,"Left child of"+node.value+ ";");
        display(node.right," Right child of "+ node.value+ ";");
    }
    // Populate Method (populate(int[] nums)): Populates the BST with elements from the given array nums.
    public void populate(int[]nums){
        for(int i=0;i<nums.length;i++){
            this.insert(nums[i]);
        }
    }

    public void populateSorted(int[]nums){          //n *log n    
        populateSorted(nums, 0, nums.length-1);
    }
    private void populateSorted(int[]nums, int start,int end){
        if(start>= end){
            return;
        }
        int mid = (start + end)/2;
        this.insert(nums[mid]);
        populateSorted(nums,start,mid);
        populateSorted( nums, mid+1,end);
    }

    // Main Method: Creates an instance of the BST, populates it with an array of integers, and displays the tree.
    public static void main(String[]args){
        BST tree = new BST();
        int []nums= {5,2,7,1,4,6,9,8,3,10};
        tree.populate(nums);
        tree.display();
        tree.populateSorted(nums);
        tree.display();
    }
// Main Method: It creates an instance of the BST class, populates it with an array of integers, and displays the tree.
// In summary, this code provides a basic implementation of a Binary Search Tree along with methods to perform common operations on it.
    
}
